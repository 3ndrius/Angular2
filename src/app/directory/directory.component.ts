import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';
declare var firebase:any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:[DataService]

})
export class DirectoryComponent implements OnInit {

  classes = {'blue':false, 'red':true, 'underline': false};
  test = true;

  students=[];
  // ninjas: string;
  constructor(private logger: LoggingService, private dataService: DataService) { }
  
  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   (data) => this.students = data
    // );

    this.fbGetData();
  }


  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.students.push(snapshot.val())
      // console.log(snapshot.val())
    })
  }

  fbPostData(name, age){
    firebase.database().ref('/').push({name:name, age:age});
  } 

}
