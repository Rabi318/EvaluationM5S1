"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoutePlanner_1 = __importDefault(require("./context/RoutePlanner"));
const FastestRoute_1 = __importDefault(require("./strategy/FastestRoute"));
const ScenicRoute_1 = __importDefault(require("./strategy/ScenicRoute"));
const ShortestDistanceRoute_1 = __importDefault(require("./strategy/ShortestDistanceRoute"));
const planner = new RoutePlanner_1.default(new FastestRoute_1.default());
planner.planRoute("Delhi", "Jaipur");
console.log("\n\n\n");
planner.setStrategy(new ScenicRoute_1.default());
planner.planRoute("Delhi", "Jaipur");
console.log("\n\n\n");
planner.setStrategy(new ShortestDistanceRoute_1.default());
planner.planRoute("Delhi", "Jaipur");
