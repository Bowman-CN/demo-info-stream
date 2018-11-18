import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
//3rd parties
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from "@angular/material/progress-bar";
// import { FallComponent } from "./info-fall/fall/fall.component";
import { CardStreamComponent } from "./components/card-stream/card-stream.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingComponent } from './components/setting/setting.component';

const route: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "hot", component: CardStreamComponent },
      { path: "prefs", component: SettingComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardStreamComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule, MatProgressBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
