import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  set(ce: number) {
    this._fetch_data_service.c_or_e = ce;
  }

}
