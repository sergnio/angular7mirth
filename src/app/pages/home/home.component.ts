import {Component, OnInit} from '@angular/core';

import {Title} from '@angular/platform-browser';

import {ApiService} from '../../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Mirth Angular App Home Page';
  successfulLogin;

  constructor(private title: Title, private apiservice: ApiService) {
  }

  async ngOnInit() {

    this.apiservice.login().subscribe(d => {
      // do nothing. Mirth returns this as an error, so we manipulate the data using the error callback
      },
        err =>  {
          this.successfulLogin = err.error.text;
          console.log(this.successfulLogin);
        } );
  }


}
