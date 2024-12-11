import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLogged:boolean;
  constructor(private userAuth:UserAuthService){
    this.isUserLogged =this.userAuth.getUserLogged();
  }
  Login(){
    this.userAuth.Login()
    
    this.isUserLogged =this.userAuth.getUserLogged();
  }
  Logout(){
    this.userAuth.Logout()

    this.isUserLogged =this.userAuth.getUserLogged();
  }

}
