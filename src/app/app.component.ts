import { Component } from '@angular/core';
import { SwUpdate, SwPush } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { InfoService } from "./services/info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'alan-feed-ng-md';
  constructor(private swUpdate: SwUpdate, private swPush: SwPush,
    private infoService: InfoService) {
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {
        console.log("service checked!!!");

        if (confirm("New version available. Load New Version?")) {

          window.location.reload();
        }
      });
    }

    this.swPush.requestSubscription({
      serverPublicKey: environment.SW_publicKey
    }).then(sub => this.infoService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
