interface IPaymentStrategy {
  validateDetails(details: object): boolean;
  pay(amount: number): void;
}

export default IPaymentStrategy;
