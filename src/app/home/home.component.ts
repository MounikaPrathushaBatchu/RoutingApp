import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  constructor(public ts : TestService) {  }

  // if we give AM as private we need to get the variable of that variable
  // constructor(private ts : TestService) {  }
  // mobiles = this.ts.mobiles;

  alphabets = ['A','B','C','D'];
  numbers = [1,2,3,4,5];

  @Input() childData : any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges called');
    console.log(changes);
    
  }

}
