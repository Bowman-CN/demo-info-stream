import { Injectable } from '@angular/core';
// import { SwUpdate, SwPush } from "@angular/service-worker";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { EMPTY } from 'rxjs';
// import { InfoService } from "../services/info.service";
// import { MatDialogRef } from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class GlobalInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (stopThisRequest) {
    //   return EMPTY;
    // } else {
    //   return next.handle(request);
    // }
    return next.handle(request);

    // return next.handle(request).do((ev: HttpEvent<any>) => {

    //   // console.log('response received', ev);

    // });
  }
}
