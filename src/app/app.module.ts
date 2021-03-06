import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';


const appRoutes: Routes = [
  {path: 'directory', component: DirectoryComponent},
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes

    )
    //for logging service
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
