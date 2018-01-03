import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ToasterService } from 'angular2-toaster';

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

  constructor(
      private emailService: EmailService,
      private toasterService: ToasterService
    ) { }

  ngOnInit() {
  }

  public sendEmail(form: any): void {
    let to      : string = 'tr3umphant.designs@gmail.com';
    let subject : string = 'New Contact - ' + this.fullName;
    let from    : string = this.email;
    let message : string = this.message;

    this.emailService.sendEmail(to, subject, from, message).subscribe(
        res => {
            this.toasterService.pop('success', 'Message Sent', 'I will respond shortly.');
            //Clear form.
        },
        error => {
            this.toasterService.pop('error', 'Error', 'Your message could not be sent at this time.');
            console.log(error);
        } 
    )

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
}
