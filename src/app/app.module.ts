import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
//3rd parties
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import { FallComponent } from "./info-fall/fall/fall.component";
import { CardStreamComponent } from "./card-stream/card-stream.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

const route: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "hotstream", component: HomeComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardStreamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
