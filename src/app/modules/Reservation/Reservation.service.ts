import emailSender from "../../../helpars/emailSender";

interface Payload {
  carName: string;
  checkinDate: string;
  checkoutDate: string;
  checkinTime: string;
  checkoutTime: string;
  phoneNumber: string;
  countryCode: string;
  specialRequests: string;
  email: string;
}
const createReservation = (payload: Payload) => {
  const subject = "Your Reservation Confirmation";

  const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              line-height: 1.6;
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
            .important {
              color: #d9534f;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Reservation Confirmation</h1>
            </div>
            <div class="content">
              <p>Dear Customer,${payload.email} </p>
              <p>Thank you for your reservation! Here are the details of your booking:</p>
              <ul>
                <li><strong>Car Name:</strong/>${payload.carName}</li>
                <li><strong>Check-in:</strong> ${payload.checkinDate} at ${
    payload.checkinTime
  }</li>
                <li><strong>Check-out:</strong> ${payload.checkoutDate} at ${
    payload.checkoutTime
  }</li>
                <li><strong>Phone Number:</strong> ${payload.phoneNumber}</li>
                <li><strong>Special Requests:</strong> ${
                  payload.specialRequests || "None"
                }</li>
              </ul>
              <p>If you have any questions, feel free to reach out to us.</p>
              <p class="important">We look forward to your visit!</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

  console.log(payload);

  emailSender(payload.email, subject, htmlContent);
};

export const ReservationService = {
  createReservation,
};
