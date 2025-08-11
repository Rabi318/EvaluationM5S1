"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseClass_1 = __importDefault(require("./baseClass"));
class SubscriptionAddon extends baseClass_1.default {
    constructor(subscription) {
        super();
        this.subscription = subscription;
    }
}
exports.default = SubscriptionAddon;
