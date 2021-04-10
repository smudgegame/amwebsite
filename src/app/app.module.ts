import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { CodingComponent } from './coding/coding.component';
import { ArtworkComponent } from './artwork/artwork.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentsComponent,
    PersonalComponent,
    EducationComponent,
    CodingComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
