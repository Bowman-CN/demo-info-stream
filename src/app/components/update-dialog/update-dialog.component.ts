import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.less']
})
export class UpdateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>
  ) { }

  ngOnInit() {
  }
  update() {
    window.location.reload();
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
