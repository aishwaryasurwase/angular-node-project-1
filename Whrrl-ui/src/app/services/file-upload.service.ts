import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  postFile(fileData) {
    return this.http.post(this.url + `uploadFile`, fileData, { responseType: 'json' })
  }
}
