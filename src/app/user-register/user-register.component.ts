

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/authentication.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public register_clicked = false;

  constructor(private fb: FormBuilder,  private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  public Register()  {
    this.register_clicked = true;
    const username = this.registerForm.get('username')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      // Handle password mismatch error
      return;
    }

    if(this.registerForm.valid){
      const user = { username, email, password };
      this.authService.register(user);
      // Registration successful, you can redirect or perform other actions here
      this._router.navigate(['dashboard']);
    }

  
  }
}

