import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
                            // implements OnChanges,OnInit,DoCheck,AfterViewInit,AfterViewChecked,
                            //           AfterContentInit,AfterContentChecked,OnDestroy 
{

  constructor(public ts : TestService) {  }

  // if we give AM as private we need to get the variable of that variable
  // constructor(private ts : TestService) {  }
  // mobiles = this.ts.mobiles;

  alphabets = ['A','B','C','D'];
  numbers = [1,2,3,4,5];

  // @Input() childData : any;
  // @Input() parentData = '';
  // @Input() mobiles : any;
  // @Input() view : any;
  // @Input() viewCkeck : any;
  // @Input() contentInit : any;
  // @Input() contentChecked : any;
  // @Input() destroy : any;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('OnChanges called');
  //   console.log(changes);
  // }
  // ngOnInit(): void {
  //   console.log(this.parentData);
  // }
  // ngDoCheck(): void {
  //   console.log("ngDoCkeck called");    
  // }
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit is called");   
  // }
  // counter = 0;
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked is called");
  // }
  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit is called");
  // }
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked is called");
  // }
  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy is called"); 
  // }

}
