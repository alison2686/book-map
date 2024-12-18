import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // or use another email provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app password
        },
      });

      // Set up email options
      const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, // Your email address to receive messages
        subject: `New Contact Form Message: ${subject}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
