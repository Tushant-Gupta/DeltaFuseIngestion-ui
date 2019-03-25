import { Component, OnInit } from '@angular/core';
import{DownloadPdfService} from '../../services/download-pdf.service';
@Component({
  selector: 'app-datavisualize',
  templateUrl: './datavisualize.component.html',
  styleUrls: ['./datavisualize.component.css']
})
export class DatavisualizeComponent implements OnInit {

  constructor(private downloadPdfservice:DownloadPdfService) { }

  ngOnInit() {
  }

 chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['Iphone X', 'OnePlus 6T', 'MI A1', 'NOKIA 6c','Samsung galaxy'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Popularity Index',
      data: [99,98,88,77,68] 
    },
  
     
  ];

  // CHART COLOR.
  colors = [
    { 
      backgroundColor: 'rgba(30,83,100,0.4)'
    },
   
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }

  getPdf(event)
  {
     console.log("getPDF called");
    this.downloadPdfservice.getPdf();
     
      

  }


}
