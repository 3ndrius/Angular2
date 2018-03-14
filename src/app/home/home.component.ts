import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 homeTitle = "Welcome to homepage !";
 myStr = "Type your text";
 boolean = "true";

// alertMe(par1) {
//   alert(par1);
// }
@Input() student;
// student = {
//   name: "John",
//   age: "19"
// };
  constructor() { }

  ngOnInit() {
  }

}
