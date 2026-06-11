import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

    const body = await req.json();

    const { name, email, phone, message } = body;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "arjunpanwar118102114@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("RESEND RESULT:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}