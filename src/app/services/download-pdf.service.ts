import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import * as FileSaver from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class DownloadPdfService {


  private _url: string = 'http://localhost:8080/report/pdfreport';

  constructor(private http: HttpClient) { }




  getPdf(){
      
  {
    alert("get pdf service called");

this.http.get(this._url, { responseType: "blob", headers: { 'Accept': 'application/pdf' } })
            .subscribe(blob => {
                console.log("download Service called !!!::" + blob);
                FileSaver.saveAs(blob, 'download.pdf');
            });
    }

   
    
  
  }


  }



