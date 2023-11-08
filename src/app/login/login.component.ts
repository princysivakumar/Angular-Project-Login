// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/authentication.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submit_clicked = false;

  constructor(private _fb: FormBuilder, private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  public Login() {
    this.submit_clicked = true;
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if(this.loginForm.valid){
      if (this.authService.login(username, password)) {
        // Login successful, you can redirect or perform other actions here
        this._router.navigate(['dashboard']);
      } else {
        // Login failed, show an error message or handle it as needed
        return
      }
    }
  
  }
}

