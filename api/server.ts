import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

const app = new Elysia()
  app.use(cors())
  .post('/api/send-email', async ({ body }) => {
    try {
      const {email,phone, message } = body as any;

      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev', 
        to:'stainsrubus@gmail.com',
        subject: 'Enquiry Request Received',
        html: `
          <h1>Appointment Details</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });

      return { success: true, data: emailResponse };
    } catch (error: any) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    }
  })
  app.listen(4000);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
