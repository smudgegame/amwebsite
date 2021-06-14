import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {
  
  artwork: any[];

  constructor() {
    this.artwork = [
      {
        title:"Desert Scene",
        medium:"Asperite",
        description:"Desert scene inspired by Spaceman Spiff",
        image:"assets/artwork/gifs/Desert.gif"
      },
      {
        title:"Rocket Engine",
        medium:"Asperite",
        description: "A fun rocket engine",
        image:"assets/artwork/gifs/Small Rocket Engine.gif"
      }
    ];
  }

  ngOnInit(): void {}
}
