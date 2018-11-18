import { Injectable } from '@angular/core';
import { ServiceBase } from "./servicebase";
import { HttpClient } from "@angular/common/http";
import { InfoEntry } from "../models/info-entry.model";
import { PushSubscription } from "../models/pushsubscription.model";
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

  addPushSubscriber(sub: any) {
    // let subObj: PushSubscription = new PushSubscription();

    // let j = sub.toJSON();
    // console.log(j);

    // subObj.endpoint = j.endpoint;
    // subObj.expirationTime = j.expirationTime;
    // subObj.keys.auth = j.keys.auth;
    // subObj.keys.p256dh = j.keys.p256dh;

    return this.http.post(super.getBaseAPI() + "subs/add", sub.toJSON());
  }
}
