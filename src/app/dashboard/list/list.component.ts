import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authentication.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

 public user_list : any
  constructor(private authService: AuthService){
this.user_list = this.authService.getUserDetails();

  }

}
