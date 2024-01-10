import { Component, OnInit } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent implements OnInit {

  constructor (private api : SkeletonApiService) {}

  user : IUser | undefined;

  ngOnInit(): void {
    this.api.getUserFromToken().subscribe(data => this.user = data.user);
  }

}
