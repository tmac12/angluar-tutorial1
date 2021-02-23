import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { CourserComponent } from './courses.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
    // CourserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
