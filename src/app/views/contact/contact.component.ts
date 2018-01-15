import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ToasterService } from 'angular2-toaster';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector    : 'contact',
  templateUrl : './contact.component.html',
  styleUrls   : ['./contact.component.scss'],
  providers: [
      EmailService
  ]
})
export class ContactComponent implements OnInit {     
    contactForm : FormGroup;

    constructor(
        private emailService: EmailService,
        private toasterService: ToasterService
        ) { }

    ngOnInit() {
        //Initialize contact form.
        this.contactForm = new FormGroup({
            fullName: new FormControl('', [ Validators.required ]),
            email   : new FormControl('', [ Validators.required, Validators.email ]),
            message : new FormControl('', [ Validators.required ])
        });
    }

    onSubmit() {
        let formIsValid     : Boolean           = true;

        let fullNameControl : AbstractControl   = this.contactForm.controls.fullName;
        let emailControl    : AbstractControl   = this.contactForm.controls.email;
        let messageControl  : AbstractControl   = this.contactForm.controls.message;

        //Check for any errors on message control.
        if(messageControl.errors != null && messageControl.errors.required == true){
            formIsValid = false;
            this.toasterService.pop('error', 'Error', 'Message is required.');
        }

        //Check for any errors on email control.
        if(emailControl.errors != null) {
            formIsValid = false;
            if(emailControl.errors.required == true){
                this.toasterService.pop('error', 'Error', 'Email is required.');
            }
            else if(emailControl.errors.email == true){
                this.toasterService.pop('error', 'Error', 'Not a valid email.');
            }
        }

        //Check for any errors on full name control.
        if(fullNameControl.errors != null && fullNameControl.errors.required == true){
            formIsValid = false;
            this.toasterService.pop('error', 'Error', 'Full Name is required.');
        }

        if(formIsValid){
            let to      : string = 'tr3umphant.designs@gmail.com';
            let subject : string = 'New Contact - ' + fullNameControl.value;
            let from    : string = emailControl.value;
            let message : string = messageControl.value;

            this.emailService.sendEmail(to, subject, from, message).subscribe(
                res => {
                    this.toasterService.pop('success', 'Message Sent', 'I will respond shortly.');
                },
                error => {
                    this.toasterService.pop('error', 'Error', 'Your message could not be sent at this time.');
                    console.log(error);
                } 
            )
        }
    }
}
