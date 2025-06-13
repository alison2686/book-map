import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
  token: z.string(),
  subscribe: z.boolean().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    console.error('Invalid form data:', result.error.flatten());
    return new Response('Invalid form data', { status: 400 });
  }

  const { name, email, subject, message, token, subscribe } = result.data;

  // Validate environment variables
  const toEmail = process.env.RECEIVER_EMAIL;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!toEmail || !secretKey) {
    console.error(
      'Missing RECEIVER_EMAIL or RECAPTCHA_SECRET_KEY in .env.local'
    );
    return new Response('Server misconfiguration', { status: 500 });
  }

  // Verify reCAPTCHA token
  const captchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: 'POST' }
  );
  const captchaJson = await captchaRes.json();

  if (!captchaJson.success) {
    console.error('reCAPTCHA failed:', captchaJson);
    return new Response('Captcha failed', { status: 403 });
  }

  try {
    const resendResponse = await resend.emails.send({
      from: 'Sojourners to Joke Sings <onboarding@resend.dev>', // ✅ Should be verified in Resend
      to: [toEmail],
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p><strong>Subscribe to book updates:</strong> ${subscribe ? 'Yes' : 'No'}</p>
      `,
    });

    console.log('Resend response:', resendResponse);
    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return new Response('Error sending email', { status: 500 });
  }
}
