"use strict";
class Blog {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }
  publish(postTitle) {
    for (const subscriber of this.subscribers) {
      subscriber.update(postTitle);
    }
  }
}
class EmailSubscriber {
  update(postTitle) {
    console.log(`Email: New blog post Title: ${postTitle}`);
  }
}
class SMSSubscriber {
  update(postTitle) {
    console.log(`SMS: New blog post Title: ${postTitle}`);
  }
}
const blog = new Blog();
const emailSub = new EmailSubscriber();
const smsSub = new SMSSubscriber();
blog.subscribe(emailSub);
blog.subscribe(smsSub);
blog.publish("Design Patters in JavaScript");
blog.publish("Observer Pattern Simplified");
