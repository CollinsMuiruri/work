import { Component } from '@angular/core';

@Component({
  selector: 'app-upvote',
  template: `
    <button (click)="onUpvote($event)">No! .. Click me!</button>
    {{clickMessage}}`
})
export class UpvoteComponent {
  clickMessage = 'yes';
  clicks = 1;

  onUpvote(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
