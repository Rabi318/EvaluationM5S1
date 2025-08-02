import RouteStrategy from "../interface/RouterInterface";

class ShortestDistanceRoute implements RouteStrategy {
  calculateRoute(from: string, to: string): void {
    console.log(`Calculating shortest distance route from ${from} to ${to}...`);
    console.log("Recommended route: Rural roads through villages");

    console.log("250 km 5.5 hours");
  }
}

export default ShortestDistanceRoute;
