import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRngif]'
})
export class RngifDirective {

  constructor(private html : TemplateRef<any>, private container : ViewContainerRef) { }

  @Input() set appRngif(condition : boolean) {
    if(!condition) {
      this.container.createEmbeddedView(this.html);
    } else {
      this.container.clear();
    }
  }

}
