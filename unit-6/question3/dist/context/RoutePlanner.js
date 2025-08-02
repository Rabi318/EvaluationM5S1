"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutePlanner {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    planRoute(from, to) {
        this.strategy.calculateRoute(from, to);
    }
}
exports.default = RoutePlanner;
