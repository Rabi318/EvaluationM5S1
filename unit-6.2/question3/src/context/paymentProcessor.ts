import IPaymentStrategy from "../strategy/strategy";

class PaymentProcessor {
  private strategy: IPaymentStrategy;

  constructor(strategy: IPaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IPaymentStrategy) {
    this.strategy = strategy;
    console.log(`Payment method switched to : ${strategy.constructor.name}`);
  }

  processPayment(details: object, amount: number) {
    console.log(`Processing Payment of ${amount}`);

    if (this.strategy.validateDetails(details)) {
      this.strategy.pay(amount);
    } else {
      console.log("Payment Failed: Invalid payment details");
    }
  }
}

export default PaymentProcessor;
