import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { map, Observable, Subscribable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { decreaseCounter, increaseCounter } from '../../../store/counter/counter.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  subscriptions!:Subscription;
  counter:Observable<number>
  //count!:number
  constructor(private _notification:NotificationService,private store:Store<{counter:number}>){
    this.counter = this.store.select("counter");
    // this.counter.subscribe((newm)=>{
    //   this.count=newm
    
    // })
  }
  increaseCont(){
    this.store.dispatch(increaseCounter())
  }
  decreaseCont(){
    this.store.dispatch(decreaseCounter())
  }

  
  ngOnInit(): void {
      this.subscriptions = this._notification.getNotifications().pipe(
        map((msg)=>`${msg} my`)
      ).subscribe({
        next:(notification)=>{
          console.log(notification)
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("this complete")
        }

      });
  }
  ngOnDestroy(): void {
      this.subscriptions.unsubscribe()
  }
}
