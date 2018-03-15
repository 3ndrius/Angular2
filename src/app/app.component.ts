import { Component } from '@angular/core';
import { LoggingService } from "./logging.service";

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
