import { Component, OnInit } from '@angular/core';

import { ElementRef, ViewChild } from '@angular/core';

import { ProviderService } from '../services/provider.service'

import * as $ from 'jquery';
//import * as CanvasJS from './imports/canvasjs.min';
//var CanvasJS = require('./canvasjs.min');
// import { DatePipe } from '@angular/common';

//import CanvasJS from 'canvasjs';
//import html2pdf from './html2pdf';
import * as CanvasJS from './canvasjs.min';
// import html2canvas from 'html2canvas';
// import { jsPDF } from "jspdf";

import { DETAILS } from '../dashboard/details';

// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private providerService: ProviderService) { }
  details

  ngOnInit() {

    this.providerService.getDashboard()
      .subscribe(data => {
        this.details = data
        this.renderCharts()
      }, err => {
        console.log(err)
      })

  }

  renderCharts() {
    const t1 = this.details.providerServiceCustomers;
    for (let i of t1) {
      i["label"] = i.serviceName;
      i["y"] = i.numberOfCustomer;
      delete i.serviceName; delete i.numberOfCustomer;
    }
    let chart0 = new CanvasJS.Chart("chartContainer0", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Customer per Service"
      },
      data: [{
        type: "column",
        dataPoints: t1
      }]
    });
    chart0.render();

    //CHART2
    const t2 = this.details.providerServiceBookings;
    for (let i of t2) {
      i["label"] = i.serviceName;
      i["y"] = i.numberOfBookings;
      delete i.serviceName; delete i.numberOfBookings;
    }
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Bookings"
      },
      data: [{
        type: "column",
        dataPoints: t2
      }]
    });
    chart.render();

    //CHART3
    const t3 = this.details.providerServiceRevenue;
    for (let i of t3) {
      i["label"] = i.serviceName;
      i["y"] = i.serviceRevenue;
      delete i.serviceName; delete i.serviceRevenue;
    }
    let chart1 = new CanvasJS.Chart("chartContainer1", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Revenue"
      },
      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{label}</b>: Rs.{y} ",
        indexLabel: "{label} - #percent%",
        dataPoints: t3
      }]
    });

    chart1.render();

  }


  // downloadPDF() {

  //   var element = document.getElementById('element-to-print');
  //   html2pdf(element, {
  //     margin: 1,
  //     filename: 'myfile.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 1, logging: true, dpi: 250, letterRendering: true },
  //     jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' }
  //   });
  // }


  // DownloadPdf(){
  //   const docDefinition = { content: 'This is an sample PDF printed with pdfMake' };

  //   pdfMake.createPdf(docDefinition).download();
  //  }


  // @ViewChild('screen') screen: ElementRef;
  // @ViewChild('canvas') canvas: ElementRef;
  // @ViewChild('downloadLink') downloadLink: ElementRef;

  // downloadImage() {
  //   html2canvas(this.screen.nativeElement).then(canvas => {
  //     this.canvas.nativeElement.src = canvas.toDataURL();
  //     this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
  //     this.downloadLink.nativeElement.download = 'marble-diagram.png';
  //     this.downloadLink.nativeElement.click();
  //   });
  // }



  // generatePdf() {
  //   const div = document.getElementById("html2Pdf");
  //   const options = { background: "white", height: div.clientHeight, width: div.clientWidth };

  //   var HTML_Width = $(".html-content").width() * 3;
  //   var HTML_Height = $(".html-content").height() * 3;
  //   var top_left_margin = 15;
  //   var PDF_Width = HTML_Width + (top_left_margin * 2);
  //   var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  //   var canvas_image_width = HTML_Width;
  //   var canvas_image_height = HTML_Height;
  //   var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


  //   html2canvas(div, options).then((canvas) => {
  //     //Initialize JSPDF
  //     let doc = new jsPDF("p", "mm", "a4");
  //     //Converting canvas to Image
  //     let imgData = canvas.toDataURL("image/PNG");
  //     //Add image Canvas to PDF
  //     doc.addImage(imgData, 'PNG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

  //     let pdfOutput = doc.output();

  //     // let buffer = new ArrayBuffer(pdfOutput.length);
  //     // let array = new Uint8Array(buffer);
  //     // for (let i = 0; i < pdfOutput.length; i++) {
  //     //     array[i] = pdfOutput.charCodeAt(i);
  //     // }

  //     for (var i = 1; i <= totalPDFPages; i++) {
  //       doc.addPage([PDF_Width, PDF_Height], 'p');
  //       doc.addImage(imgData, 'PNG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
  //     }

  //     //Name of pdf
  //     const fileName = "example.pdf";

  //     // Make file
  //     doc.save(fileName);

  //   });
  // }


  // downloadImage()
  // {

  // var HTML_Width = $(".canvas_div_pdf").width();
  // var HTML_Height = $(".canvas_div_pdf").height();
  // var top_left_margin = 15;
  // var PDF_Width = Math.ceil(HTML_Width+(top_left_margin*2));
  // var PDF_Height = Math.ceil((PDF_Width*1.5)+(top_left_margin*2));
  // var canvas_image_width = Math.ceil(HTML_Width);
  // var canvas_image_height = Math.ceil(HTML_Height);

  // var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

  //   html2canvas(this.screen.nativeElement).then(canvas => {

  //     canvas.getContext('2d');

  // 		console.log(canvas.height+"  "+canvas.width);


  // 		var imgData = canvas.toDataURL("image/jpeg", 1.0);
  // 		var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
  // 	    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);


  // 		for (var i = 1; i <= totalPDFPages; i++) {
  // 			pdf.addPage([PDF_Width, PDF_Height],'p');
  // 			pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
  // 		}

  // 	    pdf.save("HTML-Document.pdf");
  //   });
  // }

}
