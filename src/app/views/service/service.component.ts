import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {

  web: any = {
    totalCost: 0.00,
    depositCost: 0.00,
    baseDevelopmentCost: 300.00,
    baseDevelopment: true,
    numberOfPages: 1,  
    pageCost: 25.99,
    domainNameCost: 9.99,
    domainName: false,
    websiteHostingCost: 59.99,
    websiteHosting: false,
    emailFunctionalityCost:  19.99,
    emailFunctionality:  false,
    databaseIntegrationCost: 99.99,
    databaseIntegration: false,
    userAuthenticationCost: 79.99,
    userAuthentication: false,
    storageCost: 59.99,
    storage: false,
    ecommerceCost: 189.99,
    ecommerce:  false,
    ongoingWebsiteMaintenanceCost: 29.99,
    ongoingWebsiteMaintenance: false,
    numberOfGoogleAPIs:  0,
    googleAPICost: 29.99
  }

  android: any = {
      totalCost: 0.00,
      depositCost: 0.00,
      baseDevelopmentCost: 3500.00,  
      emailFunctionalityCost: 19.99,
      emailFunctionality: false,
      databaseIntegrationCost: 99.99,
      databaseIntegration: false,
      userAuthenticationCost: 79.99,
      userAuthentication: false,     
      storageCost: 59.99, 
      storage: false,
      ecommerceCost: 189.99,
      ecommerce: false,
      ongoingMaintenanceCost: 9.99,
      ongoingMaintenance: false
  }

  ios: any = {
      totalCost: 0.00,
      depositCost: 0.00,
      baseDevelopmentCost: 3000.00,  
      emailFunctionalityCost: 19.99,
      emailFunctionality: false,
      databaseIntegrationCost: 99.99,
      databaseIntegration: false,
      userAuthenticationCost: 79.99,
      userAuthentication: false,     
      storageCost: 59.99, 
      storage: false,
      ecommerceCost: 189.99,
      ecommerce: false,
      ongoingMaintenanceCost: 9.99,
      ongoingMaintenance: false
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public calculateAndroidCost = () => {
    this.android.totalCost = 0;
    this.android.totalCost += this.android.baseDevelopmentCost;
    this.android.emailFunctionality ? (this.android.totalCost += this.android.emailFunctionalityCost) : null;
    this.android.databaseIntegration ? (this.android.totalCost += this.android.databaseIntegrationCost) : null;
    this.android.userAuthentication ? (this.android.totalCost += this.android.userAuthenticationCost) : null;
    this.android.storage ? (this.android.totalCost += this.android.storageCost) : null;
    this.android.ecommerce ? (this.android.totalCost += this.android.ecommerceCost) : null;
    this.android.ongoingWebsiteMaintenance ? (this.android.totalCost  += this.android.ongoingMaintenanceCost) : null;
    this.android.depositCost = this.android.totalCost / 3;

    this.android.totalCost = Math.ceil(this.android.totalCost);
    this.android.depositCost = Math.ceil(this.android.depositCost);
  }

  public calculateWebCost = () => {
    this.web.totalCost = 0;
    this.web.totalCost += this.web.baseDevelopmentCost;
    this.web.totalCost += this.web.numberOfPages * this.web.pageCost;
    this.web.totalCost += this.web.numberOfGoogleAPIs * this.web.googleAPICost;
    this.web.domainName ? this.web.totalCost += this.web.domainNameCost : null;
    this.web.websiteHosting ? this.web.totalCost += this.web.websiteHostingCost : null;
    this.web.emailFunctionality ? this.web.totalCost += this.web.emailFunctionalityCost : null;
    this.web.databaseIntegration ? this.web.totalCost += this.web.databaseIntegrationCost : null;
    this.web.userAuthentication ? this.web.totalCost += this.web.userAuthenticationCost : null;
    this.web.storage ? this.web.totalCost += this.web.storageCost : null;
    this.web.ecommerce ? this.web.totalCost += this.web.ecommerceCost : null;
    this.web.ongoingMaintenance ? this.web.totalCost += this.web.ongoingMaintenanceCost : null;
    this.web.depositCost = this.web.totalCost / 3;

    this.web.totalCost = Math.ceil(this.web.totalCost);
    this.web.depositCost = Math.ceil(this.web.depositCost);
  }

  public calculateiOSCost = () => {
    this.ios.totalCost = 0;
    this.ios.totalCost += this.ios.baseDevelopmentCost;
    this.ios.emailFunctionality ? (this.ios.totalCost += this.ios.emailFunctionalityCost) : null;
    this.ios.databaseIntegration ? (this.ios.totalCost += this.ios.databaseIntegrationCost) : null;
    this.ios.userAuthentication ? (this.ios.totalCost += this.ios.userAuthenticationCost) : null;
    this.ios.storage ? (this.ios.totalCost += this.ios.storageCost) : null;
    this.ios.ecommerce ? (this.ios.totalCost += this.ios.ecommerceCost) : null;
    this.ios.ongoingWebsiteMaintenance ? (this.ios.totalCost  += this.ios.ongoingMaintenanceCost) : null;
    this.ios.depositCost = this.ios.totalCost / 3;

    this.ios.totalCost = Math.ceil(this.ios.totalCost);
    this.ios.depositCost = Math.ceil(this.ios.depositCost);
  }

  public sendQuoteToContact(app: String): void {
    let message   : string;
    let features  : Array<string> = new Array<string>();

    switch(app){
        case 'Web':
            features.push(this.web.numberOfPages == 1 ? '1 page' : this.web.numberOfPages + ' pages');
    
            if(this.web.domainName){
                features.push('domain name');
            }
            if(this.web.websiteHosting){
                features.push('website hosting');
            }
            if(this.web.emailFunctionality){
                features.push('email functionality');
            }
            if(this.web.databaseIntegration){
                features.push('database integration');
            }
            if(this.web.userAuthentication){
                features.push('user authentication');
            }
            if(this.web.storage){
                features.push('storage');
            }
            if(this.web.ecommerce){
                features.push('ecommerce');
            }
            if(this.web.ongoingWebsiteMaintenance){
                features.push('ongoing web maintenance');
            }
            if(this.web.numberOfGoogleAPIs > 0){
                features.push(this.web.numberOfGoogleAPIs + ' Google apis');
            }

            //Prepare Message
            message = 'NEW REQUEST FOR WEBSITE : FEATURES - ';

            features.forEach((feature, index) => {
                if(index == features.length - 1){
                    message += feature;
                }else{
                    message += feature + ', ';
                }
            });

            //Add estimate and send message to contact view.
            message += ': ESTIMATE INCLUDING $' + this.web.baseDevelopmentCost.toFixed(2) + ' BASE DEVELOPMENT FEE - $' + this.web.totalCost.toFixed(2);
            this.router.navigate(['/contact'], { queryParams: { message: message } });

            break;
        case 'Android':
            if(this.android.emailFunctionality){
                features.push('email functionality');
            }
            if(this.android.databaseIntegration){
                features.push('database integration');
            }
            if(this.android.userAuthentication){
                features.push('user authentication');
            }
            if(this.android.storage){
                features.push('storage');
            }
            if(this.android.ecommerce){
                features.push('ecommerce');
            }
            if(this.android.ongoingWebsiteMaintenance){
                features.push('ongoing web maintenance');
            }
            if(this.android.numberOfGoogleAPIs > 0){
                features.push(this.android.numberOfGoogleAPIs + ' Google apis');
            }

            //Prepare Message
            message = 'NEW REQUEST FOR ANDROID APP : FEATURES - ';

            features.forEach((feature, index) => {
                if(index == features.length - 1){
                    message += feature;
                }else{
                    message += feature + ', ';
                }
            });

            //Add estimate and send message to contact view.
            message += ': ESTIMATE INCLUDING $' + this.android.baseDevelopmentCost.toFixed(2) + ' BASE DEVELOPMENT FEE - $' + this.android.totalCost.toFixed(2);
            this.router.navigate(['/contact'], { queryParams: { message: message } });

            break;
        case 'iOS':
            if(this.ios.emailFunctionality){
                features.push('email functionality');
            }
            if(this.ios.databaseIntegration){
                features.push('database integration');
            }
            if(this.ios.userAuthentication){
                features.push('user authentication');
            }
            if(this.ios.storage){
                features.push('storage');
            }
            if(this.ios.ecommerce){
                features.push('ecommerce');
            }
            if(this.ios.ongoingWebsiteMaintenance){
                features.push('ongoing web maintenance');
            }
            if(this.ios.numberOfGoogleAPIs > 0){
                features.push(this.ios.numberOfGoogleAPIs + ' Google apis');
            }

            //Prepare Message
            message = 'NEW REQUEST FOR iOS APP : FEATURES - ';

            features.forEach((feature, index) => {
                if(index == features.length - 1){
                    message += feature;
                }else{
                    message += feature + ', ';
                }
            });

            //Add estimate and send message to contact view.
            message += ': ESTIMATE INCLUDING $' + this.ios.baseDevelopmentCost.toFixed(2) + ' BASE DEVELOPMENT FEE - $' + this.ios.totalCost.toFixed(2);
            this.router.navigate(['/contact'], { queryParams: { message: message } });
            break;
        default:break;
    }
 }
}
