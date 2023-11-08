

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Register a new user
  register(user: any): void {
    const users = this.getUsers();
    users.push(user);
    sessionStorage.setItem('users', JSON.stringify(users));
  }

  registerUserDetails(user_detail: any): void {
    const user_details = this.getUserDetails();
    user_details.push(user_detail);
    sessionStorage.setItem('user_details', JSON.stringify(user_details));
  }

  // Log in a user
  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Log out the current user
  logout(): void {
    sessionStorage.removeItem('currentUser');
  }


  // Get all registered users
  private getUsers(): any[] {
    const usersJson = sessionStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
  }


  public getUserDetails(): any[] {
    const usersJson = sessionStorage.getItem('user_details');
    return usersJson ? JSON.parse(usersJson) : [];
  }
}

