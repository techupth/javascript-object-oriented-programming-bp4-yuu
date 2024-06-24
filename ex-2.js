
class Notification {
    constructor (notificationID, createdTime, content, receiver) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
  
    send () {
        return console.log(`Notification has been sent to ${this.receiver}`)
    }
  }
  
  class EmailNotification extends Notification {
    constructor (notificationID, createdTime, content, receiver) {
        super (notificationID, createdTime, content,receiver)
    }
  }
  
  class SMSNotification extends Notification {
    constructor (notificationID, createdTime, content, phoneNumber) {
      super (notificationID, createdTime, content)
        this.phoneNumber = phoneNumber;
    }
  }
  
  let deliveryEmailNotification = new EmailNotification (1,"09:48","Delivery Complete","s.suwapee@gmail.com")
  let deliverySMSNotification = new EmailNotification (1,"09:48","Delivery Complete","0895528856")
  
  deliveryEmailNotification.send()
  deliverySMSNotification.send()