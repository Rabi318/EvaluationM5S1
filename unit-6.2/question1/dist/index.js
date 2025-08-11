"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basicSubscription_1 = __importDefault(require("./services/basicSubscription"));
const certificateAddon_1 = __importDefault(require("./services/certificateAddon"));
const doubtSupportAddon_1 = __importDefault(require("./services/doubtSupportAddon"));
const mentorAccessAddon_1 = __importDefault(require("./services/mentorAccessAddon"));
const promotionalBundle_1 = __importDefault(require("./services/promotionalBundle"));
//Basic + certification course
let sub1 = new basicSubscription_1.default();
sub1 = new certificateAddon_1.default(sub1);
console.log("Cost:", sub1.getCost());
console.log("Features:", sub1.getFeatures());
//All Addons with Discount
let sub2 = new basicSubscription_1.default();
sub2 = new certificateAddon_1.default(sub2);
sub2 = new doubtSupportAddon_1.default(sub2);
sub2 = new mentorAccessAddon_1.default(sub2);
sub2 = new promotionalBundle_1.default(sub2);
console.log("Cost:", sub2.getCost());
console.log("Features:", sub2.getFeatures());
