import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-child2',
  templateUrl: './home-child2.component.html',
  styleUrls: ['./home-child2.component.css']
})
export class HomeChild2Component {

  @Input() list : any;

}
