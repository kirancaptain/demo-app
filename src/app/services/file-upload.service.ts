import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<Object> {
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post('http://127.0.0.1:4000/predict_maintenance', { file: formData }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  sampleGet() {
    return this.httpClient.get('assets/file.json');
  }
}
