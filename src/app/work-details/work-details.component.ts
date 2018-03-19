import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Work } from '../work'
import { Mwangi } from '../mwangi'

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  @Input() work: Work;
  @Output() isComplete = new EventEmitter<boolean>();

  workDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
