"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
        console.log(`Payment method switched to : ${strategy.constructor.name}`);
    }
    processPayment(details, amount) {
        console.log(`Processing Payment of ${amount}`);
        if (this.strategy.validateDetails(details)) {
            this.strategy.pay(amount);
        }
        else {
            console.log("Payment Failed: Invalid payment details");
        }
    }
}
exports.default = PaymentProcessor;
