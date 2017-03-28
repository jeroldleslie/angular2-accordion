// imports all the nessesary classes, interfaces and services
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';

@Component({ // component configurations 
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

// Viewchils variable to get html dom compoenent
  @ViewChild("pieCanvas") pieCanvas;

  // tests pass input varibale
  @Input() pass = 0;

  // tests fail input varibale
  @Input() fail = 0;
  constructor() {
  }

  // variable for piechart class
  // this wil do all calculation
  piechart;


  ngAfterViewInit() {
    let canvas = this.pieCanvas.nativeElement;

    canvas.width = 100;
    canvas.height = 100;
    this.piechart = new Piechart(
      {
        canvas: canvas,
        data: {
          "Pass": parseInt(this.pass + ""),
          "Fail": parseInt(this.fail + ""),
        },
        colors: ["#8bc34a", "#ff7043"]
      }
    );
    this.piechart.draw();

  }
}

// piechart class which exactly calculates slices of a pie circle
// do partitions of the given value 
// apply color and labels
export class Piechart {
  // options of PieChartComponent
  // example: {
  //       canvas: canvas,
  //       data: {
  //         "Pass": parseInt(this.pass + ""),
  //         "Fail": parseInt(this.fail + ""),
  //       },
  //       colors: ["#8bc34a", "#ff7043"]
  //     }
  options;

  // actual piechart base canvase
  canvas;
  ctx;
  colors;
  constructor(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
  }
  // drawLine(ctx, startX, startY, endX, endY) {
  //   ctx.beginPath();
  //   ctx.moveTo(startX, startY);
  //   ctx.lineTo(endX, endY);
  //   ctx.stroke();
  // }
  // drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
  //   ctx.beginPath();
  //   ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  //   ctx.stroke();
  // }

  drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }
  draw = function () {
    var total_value = 0;
    var color_index = 0;
    for (var categ in this.options.data) {
      var val = this.options.data[categ];
      total_value += val;
    }
    var start_angle = 0;
    for (categ in this.options.data) {
      val = this.options.data[categ];
      var slice_angle = 2 * Math.PI * val / total_value;

      this.drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        Math.min(this.canvas.width / 2, this.canvas.height / 2),
        start_angle,
        start_angle + slice_angle,
        this.colors[color_index % this.colors.length]
      );

      start_angle += slice_angle;
      color_index++;
    }

    start_angle = 0;
    for (categ in this.options.data) {
      val = this.options.data[categ];
      slice_angle = 2 * Math.PI * val / total_value;
      var pieRadius = Math.min(this.canvas.width / 2, this.canvas.height / 2);
      var labelX = this.canvas.width / 2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
      var labelY = this.canvas.height / 2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);

      if (this.options.doughnutHoleSize) {
        var offset = (pieRadius * this.options.doughnutHoleSize) / 2;
        labelX = this.canvas.width / 2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
        labelY = this.canvas.height / 2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);
      }

      var labelText = Math.round(100 * val / total_value);
      this.ctx.fillStyle = "white";
      this.ctx.font = "11px";

      //this.ctx.fillText(labelText + "%", labelX, labelY);

      this.ctx.fillText(val, labelX, labelY);
      start_angle += slice_angle;
    }

  }
}
