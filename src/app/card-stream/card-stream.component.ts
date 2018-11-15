import { Component, OnInit, HostListener } from '@angular/core';
import { InfoService } from "../services/info.service";
import { InfoEntry } from "../models/info-entry.model";
import { PageableResponse } from "../models/pageableresponse.model";
import * as moment from "moment";

@Component({
  selector: 'app-card-stream',
  templateUrl: './card-stream.component.html',
  styleUrls: ['./card-stream.component.less']
})
export class CardStreamComponent implements OnInit {
  hotEntires: Array<InfoEntry> = new Array<InfoEntry>();
  currentPage: number = 0;
  pageSize: number = 5;
  pageResponse: PageableResponse<InfoEntry> = new PageableResponse<InfoEntry>();

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.loadHotData(0);
  }

  loadHotData(pidx: number, psize: number = this.pageSize) {
    if (!this.pageResponse.last) {
      this.infoService.getInfoStream(pidx, psize).subscribe(res => {
        this.pageResponse = res;
        // this.hotEntires = res.content;
        if (!res.last) {
          this.currentPage = res.number;
        }
        if (!this.pageResponse.empty) {

          this.hotEntires = this.hotEntires.concat(res.content);
        }
      });
    } else {
      console.log('last page already, no more data');

    }

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 1)) {
      setTimeout(() => {
        this.loadHotData(this.currentPage + 1);
      }, 1500);

    }
  }

  formatDate(date: Date): string {
    return moment(date).format('HH:mm DD,MMM');
  }

}
