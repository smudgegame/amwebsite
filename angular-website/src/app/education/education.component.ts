import { Component, OnInit } from '@angular/core';
import { MathContent } from '../math-content';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  mathLatex: MathContent = {
    latex: `$$ \\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^{n}\\cdot x^{2n+1}}{(2n+1)!} $$`
  };

  constructor() { }

  ngOnInit(): void {
  }

}
