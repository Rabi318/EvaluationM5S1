"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PayPalPayment {
    validateDetails(details) {
        const { email } = details;
        return typeof email === "string" && email.includes("@");
    }
    pay(amount) {
        const fee = amount * 0.025;
        const total = amount + fee;
        console.log(`PayPal payment successful. Total charged: ${total.toFixed(2)} (including fee of ${fee.toFixed(2)})`);
    }
}
exports.default = PayPalPayment;
