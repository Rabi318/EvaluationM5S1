import CourseSubscription from "./baseClass";

abstract class SubscriptionAddon extends CourseSubscription {
  protected subscription: CourseSubscription;
  constructor(subscription: CourseSubscription) {
    super();
    this.subscription = subscription;
  }

  abstract getCost(): number;
  abstract getFeatures(): string[];
  abstract getAddons(): string[];
}

export default SubscriptionAddon;
