import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  classes = {'blue':false, 'red':true, 'underline': false};
  test = true;

  students=[
    {name: "John", age:22},
    {name: "Mark", age:32},
    {name: "Teresa", age:55}
  ];
  // ninjas: string;
  constructor() { }

  ngOnInit() {
  }

}