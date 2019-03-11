import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { IUpload } from './upload';
import { FileDetector } from 'protractor';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private file: File;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {

  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }
  uploadFile() {
    this.uploadService.uploadFile(this.file).subscribe(
      date => {
        console.log();
        return true;
      },
      error => {
        console.log(error);
        return true;
      }

    );
  }
}
