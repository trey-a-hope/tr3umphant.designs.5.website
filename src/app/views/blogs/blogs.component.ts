import { Component, OnInit } from '@angular/core';
import { BlogService }       from '../../services/blog.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  posts: [any];

  constructor(
    private blogService : BlogService,
    private router : Router
  ) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  private goToBlog(postId: number): void {
    this.router.navigate(['/full-blog'], { queryParams: { id: postId } });
  }
}
