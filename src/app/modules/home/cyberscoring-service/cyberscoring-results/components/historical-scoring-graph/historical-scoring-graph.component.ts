import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ChartType } from "chart.js";
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: "app-historical-scoring-graph",
  templateUrl: "./historical-scoring-graph.component.html",
  styleUrls: [
    "./historical-scoring-graph.component.scss",
    "../../../cyberscoring/cyberscoring.component.scss",
  ],
})
export class HistoricalScoringGraphComponent implements OnInit {
  @Input() dataC: any;
  @Input() chartDataset: Array<any> = [];
  @Input() chartType: ChartType = "line";;
  @Input() chartLabels:  Array<any> = [];
  @Input()  chartOptions = {
    scales: {
      xAxes: [
        {
          ticks: {
            callback: function (value) {
              return value;
            },
          },
        },
      ],

      yAxes: [
        {
          ticks: {
            steps: 10,
            stepValue: 100,
            max: 1000,
            min: 0,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      mode: "label",
      callbacks: {
        title: (tooltipItems, data) => {
          var idx = tooltipItems[0].index;
          return data.labels[idx];
        },
      },
    },
  } ;
  staticContentUrl: string = environment.STATIC_CONTENT;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    console.log(this.dataC,
      this.chartDataset,
      this.chartType,
      this.chartLabels,
      this.chartOptions)
  }
}
