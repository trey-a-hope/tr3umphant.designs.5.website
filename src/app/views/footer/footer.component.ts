import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',//'footer' is already taken by mdb.
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public logoUrl = require("../../../../img/logo/tr3umphant.png");

    constructor() { }

    ngOnInit() { 
    }

    public share(provider: string): void {
        var url: string = 'http://td5.tr3umphant-designs.com';
        var text: string = 'Check out this software development service called Tr3umphant.Designs!';

        switch (provider) {
            case 'TWITTER':
                window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                break;
            case 'FACEBOOK':
                window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&title='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                break;
            case 'LINKEDIN':
                window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                break;
            case 'GOOGLE+':
                window.open('https://plus.google.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                break;
            default:
                break;
        }
    }

}
