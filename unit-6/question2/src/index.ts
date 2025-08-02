interface Subscriber {
  update(postTitle: string): void;
}

class Blog {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }
  publish(postTitle: string) {
    for (const subscriber of this.subscribers) {
      subscriber.update(postTitle);
    }
  }
}

class EmailSubscriber implements Subscriber {
  update(postTitle: string): void {
    console.log(`Email: New blog post Title: ${postTitle}`);
  }
}

class SMSSubscriber implements Subscriber {
  update(postTitle: string): void {
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
