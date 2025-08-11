import CourseSubscription from "../abstract/baseClass";

class BasicSubscription extends CourseSubscription {
  getCost(): number {
    return 499;
  }
  getFeatures(): string[] {
    return ["Access to all basic courses"];
  }
  getAddons(): string[] {
    return [];
  }
}

export default BasicSubscription;
