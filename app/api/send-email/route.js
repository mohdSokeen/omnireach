import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message, resume } = await request.json();

    // ✅ Validate only name/email/message
    if (!name || !email || !message) {
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
            Sent from Omnireach contact form.
          </p>
        </div>
      `,
    };

    // ✅ Attach resume only if uploaded
    if (resume?.data && resume?.name && resume?.type) {
      const base64Data = resume.data.replace(/^data:.*;base64,/, "");
      mailOptions.attachments = [
        {
          filename: resume.name,
          content: base64Data,
          encoding: "base64",
          contentType: resume.type,
        },
      ];
    }

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
