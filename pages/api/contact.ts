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
    subject: `Test message from mood site`,
    html: `<p>
    <ul>
        <li>Имя: ${req.body.name}</li>
        <li>Телефон: ${req.body.phone}</li>
    </ul>
    </p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send('success');
}
