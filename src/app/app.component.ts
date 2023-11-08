import { Component } from '@angular/core';
import { AuthService } from './services/authentication.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project';


  constructor(private authService: AuthService, ) {}

  public LogOut(){
this.authService.logout();
  }
}
