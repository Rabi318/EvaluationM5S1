import SubscriptionAddon from "../abstract/subscriptionAddon";

class PromotionalBundle extends SubscriptionAddon {
  getCost(): number {
    const baseConst = this.subscription.getCost();
    const addons = this.subscription.getAddons();

    const hasDoubtSupport = addons.includes("Doubt Support");
    const hasMentorAccess = addons.includes("Mentor Access");

    if (hasDoubtSupport && hasMentorAccess) {
      return baseConst * 0.85;
    }
    return baseConst;
  }

  getFeatures(): string[] {
    return this.subscription.getFeatures();
  }

  getAddons(): string[] {
    return this.subscription.getAddons();
  }
}

export default PromotionalBundle;
