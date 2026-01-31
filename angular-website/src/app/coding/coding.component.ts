import { Component, OnInit } from '@angular/core';
import { constants } from './codeProjects';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  codeProjects = constants.codeProjects;
  playIcon = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

  open(title: string){
    if(title == "Satellite Game"){
      window.open('../assets/satellite/index.html')
    }
  }

}
