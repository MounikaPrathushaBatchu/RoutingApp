import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestService } from './test.service';
import { HomeChild1Component } from './home-child1/home-child1.component';
import { HomeChild2Component } from './home-child2/home-child2.component';
import { HttpClientModule } from '@angular/common/http'

const routes : Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'homechild1',component:HomeChild1Component
      },
      {
        path:'homechild2',component:HomeChild2Component
      }
    ]
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    HomeChild1Component,
    HomeChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
