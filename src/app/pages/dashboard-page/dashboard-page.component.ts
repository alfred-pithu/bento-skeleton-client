import { Component, OnInit } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {
  services: string[] = [];
  loading: boolean = false;

  constructor(private api: SkeletonApiService) { }



}
