// In factory pattern, instead of creating object directly using classes
// we use a factory class which uses different classes to create an object

interface NotificationSender {
  sendNotification(): void;
}

class EmailNotificationSender implements NotificationSender {
  message = "";

  constructor(message: string) {
    this.message = message;
  }

  sendNotification(): void {
    console.log(`${this.message} Email notification sent`);
  }
}

class SMSNotificationSender implements NotificationSender {
  message = "";

  constructor(message: string) {
    this.message = message;
  }
  sendNotification(): void {
    console.log(`${this.message} SMS Notification sent`);
  }
}

class PushNotificationSender implements NotificationSender {
  message = "";

  constructor(message: string) {
    this.message = message;
  }
  sendNotification(): void {
    console.log(`${this.message} Push notification sent`);
  }
}

export class NotificationFactoryClass {
  static createNotificationSender({
    type,
    message,
  }: {
    type: string;
    message: string;
  }) {
    console.log(type, message);
    if (type == "email") {
      return new EmailNotificationSender(message);
    } else if (type == "sms") {
      return new SMSNotificationSender(message);
    } else if (type == "push") {
      return new PushNotificationSender(message);
    } else {
      throw new Error("Notification type not supported.");
    }
  }
}
