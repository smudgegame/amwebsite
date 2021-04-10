import { Injectable } from "@angular/core";
import { Observable, Observer, ReplaySubject } from "rxjs";
import { MathContent } from "./math-content";

// see https://stackoverflow.com/a/12709880/1203690
declare global {
    interface Window {
      hubReady: Observer<boolean>;
    }
  }
  
  @Injectable()
  export class MathServiceImpl {
    private readonly notifier: ReplaySubject<boolean>;
  
    constructor() {
      this.notifier = new ReplaySubject<boolean>();
      window.hubReady = this.notifier; // as said, bind to window object
    }
  
    ready(): Observable<boolean> {
      return this.notifier;
    }
  
    render(element: HTMLElement, math?: MathContent): void {
      if (math) {
        if (math.latex) {
          element.innerText = math.latex;
        }
      }
  
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
    }
  }