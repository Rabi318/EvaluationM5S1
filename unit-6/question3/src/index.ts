import RoutePlanner from "./context/RoutePlanner";
import FastestRoute from "./strategy/FastestRoute";
import ScenicRoute from "./strategy/ScenicRoute";
import ShortestDistanceRoute from "./strategy/ShortestDistanceRoute";

const planner = new RoutePlanner(new FastestRoute());

planner.planRoute("Delhi", "Jaipur");
console.log("\n\n");

planner.setStrategy(new ScenicRoute());
planner.planRoute("Delhi", "Jaipur");

console.log("\n\n");

planner.setStrategy(new ShortestDistanceRoute());
planner.planRoute("Delhi", "Jaipur");
