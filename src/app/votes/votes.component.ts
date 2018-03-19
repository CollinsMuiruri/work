import { Component, OnInit } from '@angular/core';
import { UpvoteComponent } from '../upvote';
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  clickMessage = 'yes';
  clicks = 1;

  onDownvote(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks--}. ${evtMsg}`);
}


onUpvote(event: any) {
  let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
  this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
}
  constructor() { }

  ngOnInit() {
  }

}
