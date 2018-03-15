import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  log() {
    console.log("Im logging servive 2");
  }
  constructor() { }

}
