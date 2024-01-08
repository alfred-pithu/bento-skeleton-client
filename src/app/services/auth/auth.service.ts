import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

/*  Ekhane type define korte hobe sure hoye Leeman bhai er shathe. Set kora hocche login.ts theke. 
 IUser is not fully correct. */
  
  user: any | null = null;

  getUser() {
    return this.user;
  }

  setUser(user: IUser | null) {
    this.user = user;
  }
}
