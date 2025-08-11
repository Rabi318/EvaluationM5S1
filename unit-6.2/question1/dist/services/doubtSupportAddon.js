"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptionAddon_1 = __importDefault(require("../abstract/subscriptionAddon"));
class DoubtSupportAddon extends subscriptionAddon_1.default {
    getCost() {
        return this.subscription.getCost() + 300;
    }
    getFeatures() {
        return [...this.subscription.getFeatures(), "24/7 Doubt Support via Chat"];
    }
    getAddons() {
        return [...this.subscription.getAddons(), "Doubt Support"];
    }
}
exports.default = DoubtSupportAddon;
