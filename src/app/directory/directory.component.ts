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
  // ninjas: string;
  constructor() { 
    //private route: ActivatedRoute
    // this.ninjas = route.snapshot.params['ninjas'];
  }

  ngOnInit() {
  }

}
