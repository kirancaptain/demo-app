import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('upload') file: ElementRef;
  dataArr = [];
  dataArr1 = [];
  showUpload = true;
  showSpinner :any;
  percent: any;
  constructor(private elementRef: ElementRef, private fileUpload: FileUploadService) { }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    console.log(files.item(0));
    // this.fileUpload.postFile(files.item(0)).subscribe(data => {
    //   console.log(data);
    //   this.getTableData();
    // }, error => {
    //   console.log(error);
    // });
    this.getTableData();
  }

  uploadFile() {
    this.file.nativeElement.click();
  }

  goBack() {
    this.showUpload = true;
  }

  getTableData() {
    this.showSpinner = true;
    this.fileUpload.sampleGet().subscribe((data) => {
      console.log(data);
      this.percent = data['defective_percentage'];
      let dataArr = [];
      let dataArr1 = [];
      for (let i = 0; i < data['Remaining RUL'].length; i++) {
        let dataObj = {
          'rul': data['Remaining RUL'][i][0],
          'fallIn': data['Will it fail in 30 cycles'][i],
          'id': data['ID'][i]
        };

        dataArr.push(dataObj);

      }


      for (var k in data['five']) {
        dataArr1.push({
          'id': k,
          'rul': data['five'][k]
        })
      }

      console.log(dataArr1);
      this.dataArr = dataArr;
      this.dataArr1 = dataArr1;

      setTimeout(() => {
        this.showSpinner = false;
        this.showUpload = false;
      }, 5000);
      
      //  console.log(this.dataArr);
    });
  }

}
