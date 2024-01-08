import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { parseServiceName } from '../../utils/service.helper';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrl: './redirect-page.component.css'
})
export class RedirectPageComponent implements OnInit {

  constructor (private router: Router, private route: ActivatedRoute, private api: SkeletonApiService) {}

  service : string | undefined;

  ngOnInit(): void {
    const service = this.route.snapshot.queryParamMap.get('service');
    if (service) {
      this.service = parseServiceName(service);
      this.api.getRedirectUrl(service).subscribe({
        next: (data) => window.location.href = data.redirect
      })
    } else this.router.navigateByUrl('/dashboard');
  }

}
