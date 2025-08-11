"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptionAddon_1 = __importDefault(require("../abstract/subscriptionAddon"));
class CertificateAddon extends subscriptionAddon_1.default {
    getCost() {
        return this.subscription.getCost() + 200;
    }
    getFeatures() {
        return [
            ...this.subscription.getFeatures(),
            "Official  Certificate of Completion",
        ];
    }
    getAddons() {
        return [...this.subscription.getAddons(), "Certificate"];
    }
}
exports.default = CertificateAddon;
