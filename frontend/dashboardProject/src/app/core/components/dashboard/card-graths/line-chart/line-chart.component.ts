import { Component, OnInit } from '@angular/core';
import Chart, { Colors } from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any;
  public plugin!: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.defaults.color = '#ffff'

    this.chart = new Chart("line-chart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
         datasets: [
          {
            label: "Venda",
            data: ['467','576', '572', '79', '92',
                 '574', '573', '576'],
            backgroundColor: [
              'rgb(75, 192, 192)'
            ],
            borderColor: 'rgb(75, 192, 192)',


          },
          {
            label: "Lucro",
            data: ['542', '542', '536', '327', '17',
                   '0.00', '538', '541'],
            backgroundColor: [
           '#be4d25'
            ],
            borderColor: '#be4d25',


          }

        ]
        

      },


      options: {

        aspectRatio:2,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
      },

      plugins: {

        title: {
          color:'#fff',
            display: true,
            text: 'Venda anual'
        },


    }





      }


    });
  }

}
