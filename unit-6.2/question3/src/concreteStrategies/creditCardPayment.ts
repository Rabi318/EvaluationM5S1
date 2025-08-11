import IPaymentStrategy from "../strategy/strategy";

class CreditCardPayment implements IPaymentStrategy {
  validateDetails(details: object): boolean {
    const { cardNumber, expiryDate, cvv } = details as {
      cardNumber: string;
      expiryDate: string;
      cvv: string;
    };
    return !!(cardNumber && expiryDate && cvv);
  }
  pay(amount: number): void {
    const fee = amount * 0.015;
    const total = amount + fee;
    console.log(
      `Credit Card Payment successful. Total charged: ${total.toFixed(
        2
      )}(including fee of ${fee.toFixed(2)})`
    );
  }
}

export default CreditCardPayment;
