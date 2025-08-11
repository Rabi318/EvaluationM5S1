"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CryptoPayment {
    validateDetails(details) {
        return !!details.valletAddress;
    }
    pay(amount) {
        const fee = 50;
        const total = amount + fee;
        console.log(`Crypto payment successful. Total charged: ${total.toFixed(2)} (including fee of ${fee})`);
    }
}
exports.default = CryptoPayment;
