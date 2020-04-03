import { Directive ,ElementRef,HostListener} from '@angular/core';
import { __exportStar } from 'tslib';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective {


  constructor(private elem:ElementRef){

    this.elem.nativeElement.style.color="black"
    this.elem.nativeElement.style.backgroundColor="red" 
    }
}
