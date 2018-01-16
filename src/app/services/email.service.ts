import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmailService {
  sendEmailPath = '/assets/sendEmailJSON.php';

  headers: Headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option

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

    return this.http.post(this.sendEmailPath, data, this.options)
                     .map((res: Response) => {
                        let body = res.json();
                        return body.data || {};
                     })
                     .catch((error: Response | any) => {
                        return Observable.throw(error.message || error);
                     }); 
  }
}
