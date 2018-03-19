import { Component, OnInit } from '@angular/core';
import {Work} from '../work'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
    works = [
    new Work(1,'Collo Conto','dont be afraid to dream',new Date(2018,3,14) ),
    new Work(2,'Isaac newton','If I have seen further than others, it is by standing upon the shoulders of giants.',new Date(2018,6,9) ),
    new Work(3, 'Lamar Marie','I can calculate the motion of heavenly bodies, but not the madness of people.',new Date(2018,1,12) ),
    new Work(4, 'Bob mArley','True riches are not found in possessions but in life...FOREVER',new Date(2018,0,18) ),
    new Work(5, 'Loe Garric','This most beautiful system of the sun, planets and comets, could only proceed from the counsel and dominion of an intelligent and powerful Being.',new Date(2018,2,14) ),
    new Work(6, 'Joker smoker','To every action there is always opposed an equal reaction.',new Date(2018,3,14) ),

    ]


    deleteWork(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.works[index].name}`)

            if(toDelete){
                this.works.splice(index,1)
            }
        }
    }
    toogleDetails(index){
        this.works[index].showDescription = !this.works[index].showDescription;
    }
    addNewWork(work){
        let workLength = this.works.length;
        work.id=workLength+1;
        work.completeDate = new Date(work.completeDate)
        this.works.push(work)

    }


  constructor() { }
  ngOnInit() {
  }
}
