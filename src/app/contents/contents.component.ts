import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


	scrollViewTo(id: string){
		const el = document.getElementById(id)!
		console.log(el)
		el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
	}

}
