import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ChambreService } from './services/chambre.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginComponent]
})
export class AppComponent {
  page:number = 1
  paymentHandler: any = null;

constructor(public services: ChambreService, public log: LoginComponent, private Comon: CommonModule, private brows : BrowserModule){}
userNamed = localStorage.getItem('name')

ngOnInit(){
  this.invokeStripe();
}

makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51LA7snDPFuwKwNiqpKiEnfJpQ8cyFvaFcrBHfrLb5RUpMPEwVGYAfotnPI4r8TtG7HuWXrwLQPJgvgPCI81shqDd00bMP5XNOv',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'Positronx',
    description: '3 widgets',
    amount: amount * 100,
  });
}

invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
}



 }

