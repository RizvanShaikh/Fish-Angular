import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  pageName : string = 'task'
  backUrl : string = '/task' ;

  viewId : string = null;

  objectData : any ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _taskService : TaskService,) 
    {
      this.viewId = this._route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.getObjectViewDetail();
  }

  getObjectViewDetail(){

    this._taskService.getTask(this.viewId).subscribe(
    (response)=>{
      if(response.success){
          this.objectData = response.data;

          console.log("this.objectData: ",this.objectData)
      }
      else{
        this._router.navigate([this.backUrl]);
      }
    }
    );

  }

}
