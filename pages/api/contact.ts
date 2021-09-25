export default function (req, res) {
  debugger;
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'odk.eurolux@gmail.com',
      pass: 'mwaduibbmwbmtqbi',
    },
    secure: true,
  });

  const mailData = {
    from: 'odk.eurolux@gmail.com',
    to: 'odk.eurolux@gmail.com',
    subject: `MOOD Design`,
    html: `<h2>Новая заявка MOOD Design</h2>
<b>Имя:</b>  ${req.body.name}<br>
<b>Телефон:</b> ${req.body.phone}<br>
<b>Что интересует:</b> ${req.body.serviceParam}<br>
<b>Джерело:</b> ${req.body.url}<br>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send('success');
}
