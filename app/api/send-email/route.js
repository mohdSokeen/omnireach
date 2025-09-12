// app\api\send-email\route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message, resume } = await request.json();

    if (!name || !email || !message || !resume?.data || !resume?.name || !resume?.type) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const base64Data = resume.data.replace(/^data:.*;base64,/, "");
    const mailOptions = {
      from: `"Omnireach Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `📩 New Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email/Phone:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr/>
          <p style="color: gray; font-size: 12px;">
            Sent from Onmireach contact form.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: base64Data,
          encoding: "base64",
          contentType: resume.type,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Mail sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send mail" },
      { status: 500 }
    );
  }
}
