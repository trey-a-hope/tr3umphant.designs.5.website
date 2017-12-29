import { Component, OnInit } from '@angular/core';
import { BlogService }       from '../../services/blog.service';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  posts: [any];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  private getBlogPosts(): void {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
