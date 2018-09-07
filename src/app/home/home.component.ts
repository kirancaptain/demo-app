import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('upload') file: ElementRef;
  constructor(private elementRef: ElementRef, private fileUpload: FileUploadService) { }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    console.log(files.item(0));
    this.fileUpload.postFile(files.item(0)).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  uploadFile() {
    this.file.nativeElement.click();
  }
}
