import BasicSubscription from "./services/basicSubscription";
import CertificateAddon from "./services/certificateAddon";
import DoubtSupportAddon from "./services/doubtSupportAddon";
import MentorAccessAddon from "./services/mentorAccessAddon";
import PromotionalBundle from "./services/promotionalBundle";

//Basic + certification course
let sub1 = new BasicSubscription();
sub1 = new CertificateAddon(sub1);
console.log("Cost:", sub1.getCost());
console.log("Features:", sub1.getFeatures());

//All Addons with Discount
let sub2 = new BasicSubscription();
sub2 = new CertificateAddon(sub2);
sub2 = new DoubtSupportAddon(sub2);
sub2 = new MentorAccessAddon(sub2);
sub2 = new PromotionalBundle(sub2);
console.log("Cost:", sub2.getCost());
console.log("Features:", sub2.getFeatures());
