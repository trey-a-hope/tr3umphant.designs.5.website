import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmailService {
  sendEmailPath = '/assets/sendEmailJSON.php';

  constructor(
    private http: Http
  ) { }
 
  public sendEmail(to: string, subject: string, from: string, message: string): Observable<any> {

    let data = JSON.stringify({
      to      : to,
      subject  : subject,
      from    : from,
      message : message
    });

    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options: RequestOptions = new RequestOptions({ headers: headers });

    return this.http.post(this.sendEmailPath, data, options)
                     .map(this.extractData)
                     .catch(this.handleErrorObservable); 
  }

  private extractData(res: Response) {
	  let body = res.json();
      return body.data || {};
  }
  
  private handleErrorObservable (error: Response | any) {
	  return Observable.throw(error.message || error);
  }

}
