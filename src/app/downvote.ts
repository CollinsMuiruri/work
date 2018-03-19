import { Component } from '@angular/core';

@Component({
  selector: 'app-downvote',
  template: `
    <button (click)="onDownvote($event)">No! .. Click me!</button>
    {{clickMessage}}`
})
export class DownvoteComponent {
  clickMessage = 'yes';
  clicks = 1;

  onDownvote(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks--}. ${evtMsg}`);
  }
}
