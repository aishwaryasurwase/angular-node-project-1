import { Injectable } from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  saveData(formData) {
    console.log("SERVICE form data ", formData);
    return this.http.post(this.url + 'saveUser', formData)
  }

  fileUpload(formData) {
    return this.http.post(this.url + 'api/upload', formData, { responseType: 'json' });
  }

  getUserData(emailID) {
    return this.http.get(this.url + `getUser/${emailID}`, { responseType: 'json' });
  }


}
