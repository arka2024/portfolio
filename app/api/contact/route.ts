import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  subject: 180,
  message: 5000,
};

function getValue(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPassword || !recipientEmail) {
    return NextResponse.json(
      { error: "The contact service is not configured yet." },
      { status: 503 }
    );
  }

  if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    return NextResponse.json(
      { error: "The SMTP service has an invalid port configuration." },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const name = getValue(body.name, MAX_LENGTHS.name);
  const email = getValue(body.email, MAX_LENGTHS.email);
  const subject = getValue(body.subject, MAX_LENGTHS.subject);
  const message = getValue(body.message, MAX_LENGTHS.message);

  if (!name || !email || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, subject, and message." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from ${name} (${email})\n\n${message}`,
    });
  } catch (error) {
    console.error("SMTP contact delivery failed:", error);
    return NextResponse.json(
      { error: "The message could not be sent. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
