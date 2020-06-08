const keys = require("./config/keys")

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
console.log(keys.sendGridAPIKey)
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(keys.sendGridAPIKey)
const msg = {
  to: "jameemkurikkal.mp@gmail.com",
  from: "jameemkurikkal.mp@gmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
}
sgMail.send(msg)
