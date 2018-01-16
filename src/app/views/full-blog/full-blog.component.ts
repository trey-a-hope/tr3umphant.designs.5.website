import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.scss']
})
export class FullBlogComponent implements OnInit {
  sub: any;
  post: any;

  constructor(        
    private route       : ActivatedRoute,
    private router      : Router,
    private blogService : BlogService,
  ) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe( params => {
      let postId: string = params['id'];
      
      this.blogService.getPost(postId).subscribe(
        data => {
          this.post = data;
        },
        error => {
          this.router.navigate(['']);
        });
    });
  }

  public share(provider: string): void {
    var text: string = 'Check out this blog I found at td5.tr3umphant-designs.com!';

    switch (provider) {
        case 'TWITTER':
            window.open('http://twitter.com/share?url='+encodeURIComponent(window.location.href)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        case 'FACEBOOK':
            window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        case 'LINKEDIN':
            window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(window.location.href)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        case 'GOOGLE+':
            window.open('https://plus.google.com/share?url='+encodeURIComponent(window.location.href)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        default:
            break;
    }
  }

}
