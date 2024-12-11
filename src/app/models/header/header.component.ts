import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { languageAction } from '../../../store/language/language.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  isLoggedin!:boolean;
  language$:Observable<string>
  currentLang!:string
  constructor(private userAuth:UserAuthService,private store:Store<{language:string}>){
    this.language$=this.store.select("language")
    this.language$.subscribe((val)=>{
      this.currentLang=val
    })
  }
  
  changeLanguage(){
    this.store.dispatch(languageAction({lang:(this.currentLang=='en')?'ar':'en'}))
  }
  // ngOnInit(): void {
  //   //this.isLoggedin = this.userAuth.getUserLogged();

  //   this.userAuth.getAuthSubject().subscribe({
  //       next:(status)=>
  //         this.isLoggedin = status
  //   });
  // }
}
