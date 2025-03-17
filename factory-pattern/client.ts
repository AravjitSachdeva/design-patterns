import { NotificationFactoryClass } from "./factory-pattern";
import {
  EmailNotificationSender,
  SMSNotificationSender,
  PushNotificationSender,
  UrgentNotification,
} from "./factory-pattern";

const notificationDetails = {
  message: "Hello, World!",
  type: "sms", // Since you want to send an email notification
};

// // Use the NotificationFactoryClass to create the appropriate notification sender
const notificationSender =
  NotificationFactoryClass.createNotificationSender(notificationDetails);

// // Now, use the notification sender to send the notification
// notificationSender.sendNotification();

const emailNotificationSender = new EmailNotificationSender(
  notificationDetails.message
);

const smsNotificationSender = new SMSNotificationSender(
  notificationDetails.message
);

const pushNotificationSender = new PushNotificationSender(
  notificationDetails.message
);

emailNotificationSender.sendMp();
