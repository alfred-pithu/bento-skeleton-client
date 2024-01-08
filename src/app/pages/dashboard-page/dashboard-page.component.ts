import { Component, OnInit } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent implements OnInit {
  services: string[] = [];

  constructor(private api: SkeletonApiService) {}

  ngOnInit(): void {
    this.api.getServicesForUser().subscribe({
      next: (data) => {
        console.log(data);
        this.services = data.message;
      },
    });
  }

  redirectToService(service: string) {
    const lowerCasedService = service.toLowerCase();
    this.api.getRedirectUrl(lowerCasedService).subscribe({
      next: (data) => {
        console.log(data.redirect);
        window.location.href = data.redirect;
      },
    });
  }
}
