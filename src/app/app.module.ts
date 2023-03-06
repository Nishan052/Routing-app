import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AvoutComponent } from './avout/avout.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {
    path : "Home",
    component : HomeComponent
  },
  {
    path : "About",
    component : AvoutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
