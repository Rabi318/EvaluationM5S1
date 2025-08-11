"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptionAddon_1 = __importDefault(require("../abstract/subscriptionAddon"));
class MentorAccessAddon extends subscriptionAddon_1.default {
    getCost() {
        return this.subscription.getCost() + 500;
    }
    getFeatures() {
        return [
            ...this.subscription.getFeatures(),
            "Weekly 1-on-1 Mentor Sessions",
        ];
    }
    getAddons() {
        return [...this.subscription.getAddons(), "Mentor Access"];
    }
}
exports.default = MentorAccessAddon;
