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

  show = true;
  wish = 'Hello'

}
