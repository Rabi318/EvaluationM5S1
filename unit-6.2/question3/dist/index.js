"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creditCardPayment_1 = __importDefault(require("./concreteStrategies/creditCardPayment"));
const cryptoPayment_1 = __importDefault(require("./concreteStrategies/cryptoPayment"));
const paymentProcessor_1 = __importDefault(require("./context/paymentProcessor"));
const processor = new paymentProcessor_1.default(new creditCardPayment_1.default());
console.log(`\n----Credit Card Payment----`);
const creditCardDetails = {
    cardNumber: "1234-5678-9876-5432",
    expiryDate: "12/25",
    cvv: "123",
};
processor.processPayment(creditCardDetails, 1000);
console.log(`\n---- PayPal Payment (Invalid Details) ----`);
const invalidPayPalDetails = {
    email: "invalid-email",
};
processor.processPayment(invalidPayPalDetails, 1500);
//Try Valid Paypa
console.log(`\n---- PayPal Payment (Valid Details) ----`);
const validPayPalDetails = {
    email: "0bSjI@example.com",
};
processor.processPayment(validPayPalDetails, 1500);
//Switch to crypto
console.log(`\n----Crypto Payment ----`);
processor.setStrategy(new cryptoPayment_1.default());
const cryptoDetails = {
    walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
};
processor.processPayment(cryptoDetails, 2000);
