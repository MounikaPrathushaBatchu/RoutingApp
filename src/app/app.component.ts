import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingApp';
  constructor(private http : HttpClient) {

  }
  // data : any = null ;
  // getData() {
  //   this.http.get('https://fakestoreapi.com/products')
  //   .subscribe((data)=>{
  //     this.data = data;
  //     console.log(data);
      
  //   })
  // }
  users :any;
  ngOnInit(){
    // this.http.get('https://fakestoreapi.com/products').subscribe(
    //   (data) => {
    //     this.users = data;
    //   }
    // )
    this.users = this.http.get('https://fakestoreapi.com/products')
  }

  // show = true;
  // wish = 'Hello Good Morning';
  // list = ['A','B','C','D'];
  // mobile = '';
  // addList() {
  //   this.list.push(this.mobile);
  //   this.mobile = "";
  // }
  // viewApp = 'ngAfterInit';
  // viewChecked = "ngAfterViewChecked";
  // counter = 0;
  // increment = 0;
  // updatyeCounter() {
  //   this.counter ++;
  // }
  // updateIncrement() {
  //   this.increment ++;
  // }
  // contentInit = 'ngAfterContentInit';
  // contentChecked = 'AfterContentChecked';
  // destroy = 'destroyed';

}
