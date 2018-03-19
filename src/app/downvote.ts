import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me3',
  template: `
    <button (click)="onClickMe3($event)">No! .. Click me!</button>
    {{clickMessage}}`
})
export class ClickMe3Component {
  clickMessage = 'yes';
  clicks = 1;

  onClickMe3(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks--}. ${evtMsg}`);
  }
}
