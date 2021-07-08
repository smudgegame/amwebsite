import { Component, OnInit } from '@angular/core';
import { constants } from './codeProjects';

@Component({
  selector: 'coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  codeProjects = constants.codeProjects;

  constructor() { }

  ngOnInit(): void {
  }

}
