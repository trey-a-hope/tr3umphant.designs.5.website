import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmailService {

  url: string = "/src/api/sendEmail.php";

  constructor(private http: Http) { }

  public sendEmail(): Observable<any> {
    let info = {
      to: 'trey.a.hope@gmail.com',
      from: 'freeman07@gmail.com',
      message: 'This for the gang.'
    }

    let data    = JSON.stringify(info); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.url, data, options) // ...using post request
                     .map(this.extractData) // ...and calling .json() on the response to return data
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
