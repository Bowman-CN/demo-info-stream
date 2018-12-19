import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-prompt-installation',
  templateUrl: './prompt-installation.component.html',
  styleUrls: ['./prompt-installation.component.less']
})
export class PromptInstallationComponent implements OnInit {
  promptEvent: any;

  constructor(private bottomSheetRef: MatBottomSheetRef<PromptInstallationComponent>) {

  }

  ngOnInit() {
  }

  cancelInstallation() {
    this.bottomSheetRef.dismiss();
    // event.preventDefault();
  }

  addNow() {
    // Show the prompt
    console.log(this.promptEvent);
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      this.promptEvent = event;
      console.log(event);
      this.promptEvent.prompt();

      // Wait for the user to respond to the prompt
      this.promptEvent.userChoice
        .then((choiceResult) => {
          console.log(choiceResult);

          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          this.promptEvent = null;
          this.bottomSheetRef.dismiss();
        });
    });

  }

}
