import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTestComponent } from './child-test/child-test.component';



@NgModule({
  declarations: [
    ChildTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ChildTestComponent
  ]
})
export class TestModule { }
