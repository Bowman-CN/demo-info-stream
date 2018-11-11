import { throwError as observableThrowError } from 'rxjs';
import { environment } from "../../environments/environment";
export class ServiceBase {

    protected baseAPI: string = "";
    protected handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {

            switch (error.status) {
                case 0:
                    errMsg = 'No Response Received. Check your network connection.';
                    break;
                default:
                    break;
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return observableThrowError(errMsg);
    }

    protected getBaseAPI() {
        return this.baseAPI = environment.CommonAPI;
    }
}