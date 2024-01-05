import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  user : IUser | null = null;

  getUser () {
    return this.user;
  }

  setUser (user: IUser | null) {
    this.user = user;
  }
}
