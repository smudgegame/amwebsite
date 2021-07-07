import { Component, OnInit } from '@angular/core';
import { constants } from './artwork';

@Component({
  selector: 'artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  artworks = constants.artworks

  constructor() {}

  ngOnInit(): void { }
}
