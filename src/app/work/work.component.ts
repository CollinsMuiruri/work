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
    new Work(2,'Gregory Isaac','I have to buy cookies for the parrot',new Date(2018,6,9) ),
    new Work(3, 'Lamar Marie','Diana has her birthday coming up soon',new Date(2018,1,12) ),
    new Work(4, 'Bob mArley','Pupper likes expensive sancks',new Date(2018,0,18) ),
    new Work(5, 'Solve math homework','Damn Math',new Date(2018,2,14) ),
    new Work(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2018,3,14) ),

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
