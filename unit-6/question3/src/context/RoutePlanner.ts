import RouteStrategy from "../interface/RouterInterface";

class RoutePlanner {
  private strategy: RouteStrategy;
  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy;
  }

  planRoute(from: string, to: string): void {
    this.strategy.calculateRoute(from, to);
  }
}

export default RoutePlanner;
