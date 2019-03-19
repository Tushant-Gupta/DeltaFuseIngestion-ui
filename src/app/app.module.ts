import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UploadService } from './services/upload.service';
import { ScheduleService } from './services/schedule.service';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HeaderComponent,
    FooterComponent,
    ScheduleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UploadService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
