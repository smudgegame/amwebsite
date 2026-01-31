import { ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

import { Directive } from "@angular/core";
import { Subject } from "rxjs";
import { MathContent } from "./math-content";
import { MathServiceImpl } from "./mathserviceimpl";
import { take, takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[appMath]'
  })
  export class MathDirective implements OnInit, OnChanges, OnDestroy {
    private alive$ = new Subject<boolean>();
  
    @Input()
    appMath: MathContent | undefined;
    private readonly _el: HTMLElement;
  
    constructor(private service: MathServiceImpl,
                private el: ElementRef) {
      this._el = el.nativeElement as HTMLElement;
    }
  
    ngOnInit(): void {
      this.service
        .ready()
        .pipe(
          take(1),
          takeUntil(this.alive$)
        ).subscribe(res => {
          this.service.render(this._el, this.appMath);
      });
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
    }
  
    ngOnDestroy(): void {
      this.alive$.next(false);
    }
  }