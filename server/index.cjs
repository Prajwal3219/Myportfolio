const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path = require('path');

// Load .env from the server folder
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('EMAIL_USER or EMAIL_PASS not set in server/.env. Email sending will fail until configured.');
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Health
app.get('/', (req, res) => res.json({ ok: true, msg: 'Mail server running' }));

app.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message are required' });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `Portfolio message from ${name} <${email}>`,
      text: `Message from ${name} <${email}>:\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info && info.response ? info.response : info);
    res.json({ ok: true });
  } catch (err) {
    console.error('Error sending mail:', err);
    res.status(500).json({ error: err.message || 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Mail server listening on http://localhost:${PORT}`));
