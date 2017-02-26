import { Directive, ElementRef, Input} from '@angular/core';

@Directive({selector:'[myHighlight]'})
export class HighlightDirective{
  constructor(el: ElementRef){
    el.nativeElement.style.backgroundColor = '#1BFF7A';
    el.nativeElement.style.width = '300px';
  }
}