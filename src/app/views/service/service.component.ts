import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  totalCost                     : number;
  depositCost                   : number;
  baseDevelopmentCost           : number  = 250.00;
  baseDevelopment               : boolean = true;
  numberOfPages                 : number  = 1;    
  pageCost                      : number  = 25.99;
  domainNameCost                : number  = 9.99;
  domainName                    : boolean = false;
  websiteHostingCost            : number  = 59.99;
  websiteHosting                : boolean = false;
  emailFunctionalityCost        : number  = 19.99;
  emailFunctionality            : boolean = false;
  databaseIntegrationCost       : number  = 99.99;
  databaseIntegration           : boolean = false;
  userAuthenticationCost        : number  = 79.99;
  userAuthentication            : boolean = false;
  storageCost                   : number  = 59.99;
  storage                       : boolean = false;
  ecommerceCost                 : number  = 189.99;
  ecommerce                     : boolean = false;
  ongoingWebsiteMaintenanceCost : number  = 29.99;
  ongoingWebsiteMaintenance     : boolean = false;
  numberOfGoogleAPIs            : number  = 0;
  googleAPICost                 : number  = 29.99;

  constructor() { }

  ngOnInit() { }

  public calculate(): void {
    this.totalCost                                    = 0;
    this.totalCost                                    += this.baseDevelopmentCost;
    this.totalCost                                    += this.numberOfPages * this.pageCost;
    this.domainName ? this.totalCost                  += this.domainNameCost : null;
    this.websiteHosting ? this.totalCost              += this.websiteHostingCost : null;
    this.emailFunctionality ? this.totalCost          += this.emailFunctionalityCost : null;
    this.databaseIntegration ? this.totalCost         += this.databaseIntegrationCost : null;
    this.userAuthentication ? this.totalCost          += this.userAuthenticationCost : null;
    this.storage ? this.totalCost                     += this.storageCost : null;
    this.ecommerce ? this.totalCost                   += this.ecommerceCost : null;
    this.ongoingWebsiteMaintenance ? this.totalCost   += this.ongoingWebsiteMaintenanceCost : null;
    this.totalCost                                    += this.numberOfGoogleAPIs * this.googleAPICost;
    this.depositCost                                  = this.totalCost / 2;
  }

  public sendQuoteToContact(): void {
    let message   : string        = 'NEW REQUEST FOR WEBSITE : FEATURES - ';
    let features  : Array<string> = new Array<string>();

    //Determine Features Added
    features.push(this.numberOfPages + ' pages');
    
    if(this.domainName){
        features.push('domain name');
    }
    if(this.websiteHosting){
        features.push('website hosting');
    }
    if(this.emailFunctionality){
        features.push('email functionality');
    }
    if(this.databaseIntegration){
        features.push('database integration');
    }
    if(this.userAuthentication){
        features.push('user authentication');
    }
    if(this.storage){
        features.push('storage');
    }
    if(this.ecommerce){
        features.push('ecommerce');
    }
    if(this.ongoingWebsiteMaintenance){
        features.push('ongoing web maintenance');
    }
    if(this.numberOfGoogleAPIs > 0){
        features.push(this.numberOfGoogleAPIs + ' Google apis');
    }
    //Prepare Message
    for(var i = 0; i < features.length; i++){
        if(i == features.length - 1){
            message += features[i];
        }else{
            message += features[i] + ', ';
        }
    }
    //Add Estimate
    message += ': ESTIMATE INCLUDING $' + this.baseDevelopmentCost.toFixed(2) + ' BASE DEVELOPMENT FEE - $' + this.totalCost.toFixed(2);

    console.log(message);

    //this.$state.go('contact', { message: message });
}

}
