
class EmailNotification {
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

class SMSNotification {
    constructor (notificationID, createdTime, content, phoneNumber) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }

    send () {
        return console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

let deliveryEmailNotification = new EmailNotification (1,"09:48","Delivery Complete","s.suwapee@gmail.com")
let deliverySMSNotification = new EmailNotification (1,"09:48","Delivery Complete","0895528856")

deliveryEmailNotification.send()
deliverySMSNotification.send()
