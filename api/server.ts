import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

const app = new Elysia()
  app.use(cors())
  .post('/api/send-email', async ({ body }) => {
    try {
      const { guardian_name, guardian_email, child_name, child_age, message } = body as any;

      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev', 
        // to: 'motherskidbee@gmail.com',
        to:'stainsrubus@gmail.com',
        subject: 'Appointment Request Received',
        html: `
          <h1>Appointment Details</h1>
          <p><strong>Guardian Name:</strong> ${guardian_name}</p>
          <p><strong>Guardian Email:</strong> ${guardian_email}</p>
          <p><strong>Child Name:</strong> ${child_name}</p>
          <p><strong>Child Age:</strong> ${child_age}</p>
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
