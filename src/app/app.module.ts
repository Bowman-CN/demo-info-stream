import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
//3rd parties
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
//proj
import { CardStreamComponent } from "./components/card-stream/card-stream.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingComponent } from './components/setting/setting.component';
import { GlobalInterceptorService } from "./services/global-interceptor.service";
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { PromptInstallationComponent } from './components/prompt-installation/prompt-installation.component';

const route: Routes = [
  // { path: '', redirectTo: '/hot', pathMatch: 'full' },
  { path: "", component: CardStreamComponent },
  { path: "prefs", component: SettingComponent }
  // { path: '**', redirectTo: '/hot' }
];

// const route: Routes = [
//   {
//     path: "papers",
//     // component: HomeComponent,
//     children: [
//       { path: "hot", component: CardStreamComponent },
//       { path: "prefs", component: SettingComponent },
//       { path: '', redirectTo: '/papers/hot', pathMatch: 'full' },
//       { path: '**', redirectTo: '/papers/hot' }
//     ]
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    CardStreamComponent,
    HomeComponent,
    SettingComponent,
    UpdateDialogComponent, PromptInstallationComponent
  ],
  entryComponents: [
    UpdateDialogComponent, PromptInstallationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatMenuModule,
    MatCardModule, MatProgressBarModule, MatDialogModule, MatBottomSheetModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
