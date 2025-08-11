import SubscriptionAddon from "../abstract/subscriptionAddon";

class CertificateAddon extends SubscriptionAddon {
  getCost(): number {
    return this.subscription.getCost() + 200;
  }
  getFeatures(): string[] {
    return [
      ...this.subscription.getFeatures(),
      "Official  Certificate of Completion",
    ];
  }
  getAddons(): string[] {
    return [...this.subscription.getAddons(), "Certificate"];
  }
}

export default CertificateAddon;
