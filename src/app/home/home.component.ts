import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges,OnInit,DoCheck {

  constructor(public ts : TestService) {  }

  // if we give AM as private we need to get the variable of that variable
  // constructor(private ts : TestService) {  }
  // mobiles = this.ts.mobiles;

  alphabets = ['A','B','C','D'];
  numbers = [1,2,3,4,5];

  @Input() childData : any;
  @Input() parentData = '';
  @Input() mobiles : any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log(this.parentData);
  }
  ngDoCheck(): void {
    console.log("ngDoCkeck called");    
  }

}
