import { Component } from '@angular/core';
import { SwUpdate, SwPush, } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { InfoService } from "./services/info.service";
import { MatDialog, DialogPosition } from "@angular/material/dialog";
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { UpdateDialogComponent } from "./components/update-dialog/update-dialog.component";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { PromptInstallationComponent } from "./components/prompt-installation/prompt-installation.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'alan-feed-ng-md';
  fanews = faNewspaper;
  showInstallation: boolean = true;
  constructor(private swUpdate: SwUpdate, private swPush: SwPush,
    private infoService: InfoService, private dialog: MatDialog,
    private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {

    // if (window.matchMedia('(display-mode: standalone)').matches) {
    //   console.log('display-mode is standalone');
    // } else {
    //   window.addEventListener('appinstalled', (evt) => {
    //     // check installation status
    //     console.log("appinstalled"+evt);
    //     this.showInstallation = false;
    //   });
    // }

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        console.log("service checked!!!");
        this.dialog.open(UpdateDialogComponent, {
          width: '350px',
          // position: {
          //   top: '50px'
          // },
          disableClose: true
        });
      });
    } else {
      console.log('swupdate checked but false');

    }

    this.swPush.messages.subscribe(message => {
      console.log('[App] Push message received', message);
      // let notification = message['notification']

      // this.message.unshift({
      //   text: notification['body'],
      //   id_str: notification['tag'],
      //   favorite_count: notification['data']['favorite_count'],
      //   retweet_count: notification['data']['retweet_count'],
      //   user: {
      //     name: notification['title']
      //   }
      // })

    })
    // this.promtInstallation();
    // this.swPush.requestSubscription({
    //   serverPublicKey: environment.SW_publicKey
    // }).then(sub => this.infoService.addPushSubscriber(sub).subscribe())
    //   .catch(err => console.error("Could not subscribe to notifications", err));
  }

  promtInstallation(): void {
    if (this.showInstallation) {
      this.bottomSheet.open(PromptInstallationComponent,{
        hasBackdrop:false
      });
    }
  }
}
