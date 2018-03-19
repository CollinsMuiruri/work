import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Work } from '../work';
@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {
  newWork = new Work(0, "", "", new Date());
  @Output() addWork=new EventEmitter<Work>();

  submitWork(){
    this.addWork.emit(this.newWork);
  }
  constructor() { }

  ngOnInit() {
  }

}
