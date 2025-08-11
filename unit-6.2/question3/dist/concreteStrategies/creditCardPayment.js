"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCardPayment {
    validateDetails(details) {
        const { cardNumber, expiryDate, cvv } = details;
        return !!(cardNumber && expiryDate && cvv);
    }
    pay(amount) {
        const fee = amount * 0.015;
        const total = amount + fee;
        console.log(`Credit Card Payment successful. Total charged: ${total.toFixed(2)}(including fee of ${fee.toFixed(2)})`);
    }
}
exports.default = CreditCardPayment;
