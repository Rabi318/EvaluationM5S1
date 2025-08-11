"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseClass_1 = __importDefault(require("../abstract/baseClass"));
class BasicSubscription extends baseClass_1.default {
    getCost() {
        return 499;
    }
    getFeatures() {
        return ["Access to all basic courses"];
    }
    getAddons() {
        return [];
    }
}
exports.default = BasicSubscription;
