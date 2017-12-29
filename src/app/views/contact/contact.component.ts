import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector    : 'contact',
  templateUrl : './contact.component.html',
  styleUrls   : ['./contact.component.scss'],
  providers: [
      EmailService
  ]
})
export class ContactComponent implements OnInit {
  fullName      : string;
  email         : string;
  message       : string = '';        
  messageLimit  : number = 400;
  attemptedSend : boolean = false;
  emailRegex    : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  public sendEmail(form: any): void {
    this.emailService.sendEmail().subscribe(data => console.log(data))

    // this.attemptedSend = true;
    // if(form.$valid){
    //     var to: string = 'tr3umphant.designs@gmail.com';
    //     var subject: string = 'New Contact - ' + this.fullName + ' via ' + this.email;
    //     var body: string = this.message;

    //     console.log(subject);
    //     console.log(body);

    //     // this.emailService.sendEmail(to, subject, body)
    //     //     .then((result: any) => {
    //     //         this.fullName = this.email = this.message = '';
    //     //         form.$setPristine();
    //     //         toastr.success('Message sent.');
    //     //     })
    //     //     .catch((error: any) => {
    //     //         toastr.error('Could not send message at this time.');
    //     //     });
    // }else{
    //     alert('There were erros in your submission.');
    //     //toastr.error('There were errors in your submission.');
    // }
  }

  public share(provider: string): void {
    var url: string = 'http://td4.tr3umphant-designs.com';
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
        default:
            break;
    }
}
}
