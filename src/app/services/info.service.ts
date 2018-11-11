import { Injectable } from '@angular/core';
import { ServiceBase } from "./servicebase";
import { HttpClient } from "@angular/common/http";
import { InfoEntry } from "../models/info-entry.model";
import { PageableResponse } from "../models/pageableresponse.model";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService extends ServiceBase {

  infoServiceURL: string = "infos";
  constructor(private http: HttpClient) {
    super();
    this.infoServiceURL = super.getBaseAPI() + this.infoServiceURL;
  }

  /**
   * With Spring boot pageable params
   */
  getInfoStream(pnum: number, psize: number) {
    return this.http.get<PageableResponse<InfoEntry>>(this.infoServiceURL + "/hot?page=" + pnum.toString() + "&size=" + psize)
      .pipe(map(res => { return res }),
        catchError(super.handleError)
      );
  }
}
