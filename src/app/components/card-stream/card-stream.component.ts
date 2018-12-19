import { Component, OnInit, HostListener } from '@angular/core';
import { InfoService } from "../../services/info.service";
import { InfoEntry } from "../../models/info-entry.model";
import { PageableResponse } from "../../models/pageableresponse.model";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment";

@Component({
  selector: 'app-card-stream',
  templateUrl: './card-stream.component.html',
  styleUrls: ['./card-stream.component.less']
})
export class CardStreamComponent implements OnInit {
  loadProgress: boolean = false;
  hotEntires: Array<InfoEntry> = new Array<InfoEntry>();
  currentPage: number = 0;
  pageSize: number = 5;
  pageResponse: PageableResponse<InfoEntry> = new PageableResponse<InfoEntry>();
  leftArr = faChevronCircleLeft;
  goTopBtn: boolean = false;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.loadHotData(0);
  }

  loadHotData(pidx: number, psize: number = this.pageSize) {
    if (!this.pageResponse.last) {
      this.infoService.getInfoStream(pidx, psize).subscribe(res => {
        if (pidx === 0) {
          this.hotEntires = new Array<InfoEntry>();
        }
        this.pageResponse = res;
        // this.hotEntires = res.content;
        if (!res.last) {
          this.currentPage = res.number;
        }
        if (!this.pageResponse.empty) {
          this.loadProgress = false;
          this.hotEntires = this.hotEntires.concat(res.content);
        }
      });
    } else {
      console.log('last page already, no more data');
      this.loadProgress = false;

    }

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 1)) {
      this.loadProgress = true;
      setTimeout(() => {
        this.loadHotData(this.currentPage + 1);
      }, 1500);

    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.goTopBtn = true;
    } else {
      this.goTopBtn = false;
    }
  }

  toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.loadHotData(0);
  }

  formatDate(date: Date): string {
    return moment(date).format('HH:mm DD,MMM');
  }

}
