import SubscriptionAddon from "../abstract/subscriptionAddon";

class DoubtSupportAddon extends SubscriptionAddon {
  getCost(): number {
    return this.subscription.getCost() + 300;
  }

  getFeatures(): string[] {
    return [...this.subscription.getFeatures(), "24/7 Doubt Support via Chat"];
  }

  getAddons(): string[] {
    return [...this.subscription.getAddons(), "Doubt Support"];
  }
}

export default DoubtSupportAddon;
