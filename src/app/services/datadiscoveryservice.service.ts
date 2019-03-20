import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataDiscovery } from '../components/data discovery/datadiscovery/DataDiscovery.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    //'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatadiscoveryserviceService {

  apiURL: string = 'http://localhost:8080/api/v1/discover';
  searchType: String;
  constructor(private http: HttpClient) { }

  postDiscover(DataDiscovery): Observable<DataDiscovery> {
    return this.http.post<DataDiscovery>(this.apiURL, DataDiscovery);
  }
}
