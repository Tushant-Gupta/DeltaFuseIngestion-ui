import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MainComponent } from './components/main/main.component';
import { DatadiscoveryComponent } from './components/data discovery/datadiscovery/datadiscovery.component';


const routes: Routes = [
  { path: 'upload', component: UploadComponent }, 
  {path: 'datadiscovery', component: DatadiscoveryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', component: MainComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
