
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  public submitRegistration(){

    const name = this.registrationForm.get('name')?.value;
    const email = this.registrationForm.get('email')?.value;
    const phone = this.registrationForm.get('phone')?.value;
    const city = this.registrationForm.get('city')?.value;

    if (this.registrationForm.valid) {
      // Handle form submission
      const user_details = { name, email, phone, city}
      this.authService.registerUserDetails(user_details);
      this._router.navigate(['dashboard/list']);
    }
  }
}

