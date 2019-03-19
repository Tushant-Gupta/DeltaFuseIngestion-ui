import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Schedule} from './Schedule.model';
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

  onClickSubmit(data) {

    console.log(data.file);
    
    this.schedule=new Schedule(data.date, data.time,data.type, data.file);
  alert("DATE = " +this.schedule.date + "  Time = "+this.schedule.time+ "  Schedule Type = "+this.schedule.scheduleType + "  File = "+ this.schedule.filePath);    }



}
