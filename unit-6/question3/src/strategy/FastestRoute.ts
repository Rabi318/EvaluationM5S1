import RouteStrategy from "../interface/RouterInterface";

class FastestRoute implements RouteStrategy {
  calculateRoute(from: string, to: string): void {
    console.log(`Calculating fastest route from ${from} to ${to}...`);
    console.log("Recommended route: NH48");
    console.log("280 km 4 hours");
  }
}

export default FastestRoute;
