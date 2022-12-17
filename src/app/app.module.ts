import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { CodingComponent } from './coding/coding.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { MathModule } from './math.module';
import {MatButtonModule} from '@angular/material/button';


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
    BrowserModule,
    MathModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
