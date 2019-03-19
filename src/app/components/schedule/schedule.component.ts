import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Schedule} from './Schedule.model';
import{ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule:Schedule;
 filename:File;
 
  title = 'DEMO';

scheduleForm;
  ngOnInit() {
     this.scheduleForm = new FormGroup({
        date: new FormControl("",Validators.required),

        time: new FormControl("",Validators.required),
        file: new FormControl("shared1",Validators.required),
        type: new FormControl("weekly", Validators.required)
     });
  }
constructor(private _scheduleService : ScheduleService){}
  onClickSubmit(data) {

    console.log(data.file);
    
    this.schedule=new Schedule(data.date, data.time,data.type, data.file);

     this._scheduleService.postSchedule(this.schedule).subscribe(
      schedule => {
        console.log(schedule);
      }
  );

  //alert("DATE = " +this.schedule.date + "  Time = "+this.schedule.time+ "  Schedule Type = "+this.schedule.scheduleType + "  File = "+ this.schedule.filePath);    }


  }
}
