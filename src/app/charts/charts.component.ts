import { Directive, Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import {Location} from '@angular/common';


const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements AfterViewInit {

 @ViewChild('chart') public chartEl: ElementRef;
  
  private _chart: any;
  
  public ngAfterViewInit() {
    let opts: any = {
        title: {
            text: 'Pie Chart',
            x: -20 
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            name: 'Tokyo',
            data: [
                7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
                26.5, 23.3, 18.3, 13.9, 9.6
            ]
        }]
    };
    
    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'pie',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }
}

}