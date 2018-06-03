const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
const serviceAccount = require('./serviceAccountKey.json');

const API_KEY = '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'
sgMail.setApiKey(API_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://heimasida-ferilskra.firebaseio.com"
});

exports.sendEmail = functions.database.ref('emails/{emailID}').onCreate((event) => {
  const { emailID } = event.params;
  const { name, email, text } = event.data.val();
  const msg = {
    to: 'magnusol93@gmail.com',
    from: email,
    subject: `Email from ${name}, sent from magtastic.xyz`,
    text,
  };
  return sgMail.send(msg);
});


exports.facebookWebhookTest = functions.https.onRequest((req, res) => {
  const body = req.body;
  if (body && body.entry) {
    const promises = [];
    body.entry.forEach((entry) => {
      entry.changes.forEach((change) => {
        promises.push(admin
          .database()
          .ref(`facebook_data/${change.field}/${entry.uid}`)
          .set(change));
      });
    });
    Promise.all(promises)
      .then(() => res.status(200).send('EVENT_RECEIVED'));
  } else {
    res.sendStatus(404);
  }
});
