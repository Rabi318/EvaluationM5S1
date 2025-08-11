import SubscriptionAddon from "../abstract/subscriptionAddon";

class MentorAccessAddon extends SubscriptionAddon {
  getCost(): number {
    return this.subscription.getCost() + 500;
  }

  getFeatures(): string[] {
    return [
      ...this.subscription.getFeatures(),
      "Weekly 1-on-1 Mentor Sessions",
    ];
  }

  getAddons(): string[] {
    return [...this.subscription.getAddons(), "Mentor Access"];
  }
}

export default MentorAccessAddon;
