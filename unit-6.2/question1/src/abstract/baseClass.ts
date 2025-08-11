abstract class CourseSubscription {
  abstract getCost(): number;
  abstract getFeatures(): string[];
  abstract getAddons(): string[];
}

export default CourseSubscription;
