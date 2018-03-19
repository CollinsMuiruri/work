export class Mwangi {
  clickMessage = 'yes';
  clicks = 1;

  onDownvote(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks--}. ${evtMsg}`);
  }
}
