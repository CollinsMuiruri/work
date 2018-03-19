import { Component } from '@angular/core';
import { Work } from './work'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  works = [
    new Work(1,'Collo Conto','dont be afraid to dream','Michael Angelow',new Date(2018,3,14) ),
    new Work(2,'Isaac newton','If I have seen further than others, it is by standing upon the shoulders of giants.','Michael Angelow',new Date(2018,6,9) ),
    new Work(3, 'Lamar Marie','I can calculate the motion of heavenly bodies, but not the madness of people.','Michael Angelow',new Date(2018,1,12) ),
    new Work(4, 'Bob mArley','True riches are not found in possessions but in life...FOREVER','Michael Angelow',new Date(2018,0,18) ),
    new Work(5, 'Loe Garric','This most beautiful system of the sun, planets and comets, could only proceed from the counsel and dominion of an intelligent and powerful Being.','Michael Angelow',new Date(2018,2,14) ),
    new Work(6, 'Joker smoker','To every action there is always opposed an equal reaction.','Michael Angelow',new Date(2018,3,14) ),

  ]
}
