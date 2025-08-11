import IPaymentStrategy from "../strategy/strategy";

class PayPalPayment implements IPaymentStrategy {
  validateDetails(details: any): boolean {
    const { email } = details;
    return typeof email === "string" && email.includes("@");
  }

  pay(amount: number): void {
    const fee = amount * 0.025;
    const total = amount + fee;
    console.log(
      `PayPal payment successful. Total charged: ${total.toFixed(
        2
      )} (including fee of ${fee.toFixed(2)})`
    );
  }
}

export default PayPalPayment;
