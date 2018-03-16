import { Component } from '@angular/core';
import { LoggingService } from "./logging.service";
import { DataService } from "./data.service";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
  

})
export class AppComponent {
  title = 'Application Angular 2';

  student = {
    name: "John",
    age: "19"
  };

}
