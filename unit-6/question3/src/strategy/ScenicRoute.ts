import RouteStrategy from "../interface/RouterInterface";

class ScenicRoute implements RouteStrategy {
  calculateRoute(from: string, to: string): void {
    console.log(`Calculating scenic route from ${from} to ${to}...`);
    console.log("Recommended route: Countryside via SH13");
    console.log("310 km 6 hours with beautiful landscapes");
  }
}

export default ScenicRoute;
