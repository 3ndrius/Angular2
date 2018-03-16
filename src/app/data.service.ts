import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class DataService {
  constructor(private http: Http) {}

  fetchData() {
    return this.http.get('https://angular-4ba45.firebaseio.com/.json').map( (res) => res.json());
    // return this.http.get('../public/student.json').map( (res) => res.json());
  }

}
