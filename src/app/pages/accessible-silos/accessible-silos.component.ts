import { Component } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accessible-silos',
  templateUrl: './accessible-silos.component.html',
  styleUrl: './accessible-silos.component.css'
})
export class AccessibleSilosComponent {
  services: string[] = [];
  loading: boolean = false;

  constructor(private api: SkeletonApiService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.api.getServicesForUser().subscribe({
      next: (data) => {
        this.loading = false;

        this.services = data.message;
        if (data.message[0] == 'all') {
          this.services = ["INVENTORY", "MENU-BUILDER", "KDS", "POS", "HR"]
        }
        // console.log(this.services);
      },
    });
  }

  redirectToService(service: string) {
    this.router.navigateByUrl('/redirect?service=' + service.toLowerCase());
  }
}
