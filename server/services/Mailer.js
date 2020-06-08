const sendGrid = require("sendgrid")
const helper = sendGrid.mail
const keys = require("../config/keys")

class Mailer extends helper.Mail {
  // this.from_email = new helper.Email('no-reply@emaily.com');
}
