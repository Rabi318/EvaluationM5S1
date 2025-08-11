"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptionAddon_1 = __importDefault(require("../abstract/subscriptionAddon"));
class PromotionalBundle extends subscriptionAddon_1.default {
    getCost() {
        const baseConst = this.subscription.getCost();
        const addons = this.subscription.getAddons();
        const hasDoubtSupport = addons.includes("Doubt Support");
        const hasMentorAccess = addons.includes("Mentor Access");
        if (hasDoubtSupport && hasMentorAccess) {
            return baseConst * 0.85;
        }
        return baseConst;
    }
    getFeatures() {
        return this.subscription.getFeatures();
    }
    getAddons() {
        return this.subscription.getAddons();
    }
}
exports.default = PromotionalBundle;
