import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // constructor(private ts : TestService) {  }
  // mobiles = this.ts.mobiles;

  constructor(public ts : TestService) {  }

  updateMobile(){
    this.ts.mobiles.push('Vivo');
  }

}
