import CreditCardPayment from "./concreteStrategies/creditCardPayment";
import CryptoPayment from "./concreteStrategies/cryptoPayment";
import PaymentProcessor from "./context/paymentProcessor";

const processor = new PaymentProcessor(new CreditCardPayment());

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
processor.setStrategy(new CryptoPayment());
const cryptoDetails = {
  walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
};
processor.processPayment(cryptoDetails, 2000);
