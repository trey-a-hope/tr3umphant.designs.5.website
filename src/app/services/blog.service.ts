import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlogService {
  blogId    : string = '3319631330907603735';
  apiKey    : string = 'AIzaSyBkJkq5fz7S5xzOGanTlW2vWZBOVF670aA';
  baseUrl   : string = 'https://www.googleapis.com/blogger/v3/blogs';

  headers: Headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
  
  constructor(
    private http: Http
  ) { }

  //Return all posts from this blog.
  public getPosts(): Observable<any> {
    let getPostsUrl: string = `${this.baseUrl}/${this.blogId}/posts?key=${this.apiKey}`;
    return this.http.get(getPostsUrl, this.options)
                     .map((res: Response)=>{
                        let body = res.json();
                        return body.items || {};
                     })
                     .catch((error: Response | any) => {
                          return Observable.throw(error.message || error);
                      }); 
  }

  //Returns a single post from this blog based on id.
  public getPost(postId: String): Observable<any> {
    let getPostUrl: string = `${this.baseUrl}/${this.blogId}/posts/${postId}?key=${this.apiKey}`;
    return this.http.get(getPostUrl, this.options)
                     .map((res: Response)=>{
                        let body = res.json();
                        return body;
                     })
                     .catch((error: Response | any) => {
                        return Observable.throw(error.message || error);
                     }); 
  }
}
