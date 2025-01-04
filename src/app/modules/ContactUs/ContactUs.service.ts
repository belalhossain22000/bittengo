import emailSender from "../../../helpars/emailSender";

// ContactUs.service: Module file for the ContactUs.service functionality.
const contactUs = (payload: {
  name: string;
  email: string;
  message: string;
  phone_number: string;
}) => {
  const subject = "Thank you for contacting us!";
  const htmlContent = `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        .header {
          background-color: #007bff;
          color: #fff;
          padding: 10px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        .footer {
          margin-top: 20px;
          font-size: 0.9em;
          text-align: center;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${payload.name}!</h1>
        </div>
        <div class="content">
          <p>We appreciate you reaching out to us. Here is a summary of your message:</p>
          <p><strong>Your Message:</strong></p>
          <p><strong>${payload.phone_number}:</strong></p>
          <blockquote style="font-style: italic; color: #555;">
            ${payload.message}
          </blockquote>
          <p>We will get back to you as soon as possible!</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send the email
  emailSender(payload.email, subject, htmlContent);
};

export const ContactUsService = {
  contactUs,
};
