interface RouteStrategy {
  calculateRoute(from: string, to: string): void;
}

export default RouteStrategy;
