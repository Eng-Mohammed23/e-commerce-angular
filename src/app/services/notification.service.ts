import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications!:string[];
  constructor() {
    this.notifications=[
      'You have unread message',
      'people reacting to your post',
      '',
      'post shared successffuly'
    ]
   }
  
  getNotifications():Observable<string>{
    return new Observable<string>((observer)=>{

      let count=0;
      let notificationInterval= setInterval(() => {

        if(count == this.notifications.length){
          observer.complete();
        }
        if(this.notifications[count]==""){
          observer.error()
        }

        observer.next(this.notifications[count])
        count++;

      },2000);

      return {
        unsubscribe:()=>{
          clearInterval(notificationInterval)
        }
      }
    })
  }
}
