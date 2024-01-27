import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.css'
})
export class LogoutPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // localStorage.clear();
    localStorage.removeItem('accessToken')
    setTimeout(() => this.router.navigateByUrl('/home'), 2000);
  }
}
