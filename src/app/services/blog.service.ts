import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlogService {

  myPostsUrl: string = 'https://www.googleapis.com/blogger/v3/blogs/3319631330907603735/posts?key=AIzaSyBkJkq5fz7S5xzOGanTlW2vWZBOVF670aA';
  //todo: break down to variables {blogId} and {apiKey}
  constructor(private http: Http) { }

  public getPosts(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.get(this.myPostsUrl, options)
                     .map(this.extractData) // ...and calling .json() on the response to return data
                     .catch(this.handleErrorObservable); 
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }
  
  private handleErrorObservable (error: Response | any) {
	  return Observable.throw(error.message || error);
  }
}
