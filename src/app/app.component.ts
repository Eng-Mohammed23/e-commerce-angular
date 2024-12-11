import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './models/footer/footer.component';
import { HeaderComponent } from './models/header/header.component';
import { OrderComponent } from './models/order/order.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({            //Decrator
  selector: 'app-root', //Directive
  standalone: true,
  imports: [
    // RouterOutlet
    FooterComponent,HeaderComponent,OrderComponent,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-iti';
  language$:Observable<string>
  dir:string="ltr"
  constructor(private store:Store<{language:string}>){
    this.language$=this.store.select("language")

    this.language$.subscribe((lang)=>{
      this.dir=(lang=="en")?'ltr':'rtl'
    })
  }
}
