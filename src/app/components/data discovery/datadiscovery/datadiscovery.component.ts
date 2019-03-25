import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatadiscoveryserviceService } from '../../../services/datadiscoveryservice.service';
import { DataDiscovery } from './DataDiscovery.model';

@Component({
  selector: 'app-datadiscovery',
  templateUrl: './datadiscovery.component.html',
  styleUrls: ['./datadiscovery.component.css']
})
export class DatadiscoveryComponent implements OnInit {
  dataDiscovery: DataDiscovery;
  constructor(private _dataDiscoveryService: DatadiscoveryserviceService) { }
  dataDiscoveryForm;
  ngOnInit() {
    this.dataDiscoveryForm = new FormGroup({
      type: new FormControl("price", Validators.required),
      //parameter: new FormControl("dualSim", Validators.required)
    });
  }

  onClickSubmit(data) {
    alert("data discovery")
    this.dataDiscovery = new DataDiscovery(data.type);
    this._dataDiscoveryService.postDiscover(this.dataDiscovery).subscribe(
      discoveredData => {
        console.log(discoveredData);
      }
    );
  }
}
