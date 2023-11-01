import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {

  constructor(element : ElementRef) {
    console.log(element);
    element.nativeElement.style.border = '2px dashed blue';
    element.nativeElement.style.background = 'green';
    element.nativeElement.style.color = 'orange'
    
   }

}
