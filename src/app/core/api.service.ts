import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private _login_url = 'https://ec2-3-16-78-46.us-east-2.compute.amazonaws.com:8443/api/users/_login';

  constructor(private http: HttpClient) { }

  login() {
    // Explicity state headers, to accept XML data
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded', //<- SEND XML format
        'Accept':  'application/xml'       //<- To ask for XML
      })
    };

    // HARD CODED DATA - this is a test application, password is normally hashed , possibly using CryptoJS
    const postedData = `username=admin&password=ozzypassword`;

    return this.http.post(this._login_url, postedData, httpOptions);
  }

}
