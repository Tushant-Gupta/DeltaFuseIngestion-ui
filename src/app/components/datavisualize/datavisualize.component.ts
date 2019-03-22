import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datavisualize',
  templateUrl: './datavisualize.component.html',
  styleUrls: ['./datavisualize.component.css']
})
export class DatavisualizeComponent implements OnInit {

  constructor() { }

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
    { // 1st Year.
      backgroundColor: 'rgba(30,83,100,0.2)'
    },
   
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }




}
