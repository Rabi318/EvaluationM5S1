import IPaymentStrategy from "../strategy/strategy";

class CryptoPayment implements IPaymentStrategy {
  validateDetails(details: any): boolean {
    return !!details.valletAddress;
  }

  pay(amount: number): void {
    const fee = 50;
    const total = amount + fee;
    console.log(
      `Crypto payment successful. Total charged: ${total.toFixed(
        2
      )} (including fee of ${fee})`
    );
  }
}

export default CryptoPayment;
