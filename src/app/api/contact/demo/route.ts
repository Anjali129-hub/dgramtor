import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "noreply@dgramtor.com",
      to: "D.gramtor2830@gmail.com",
      subject: "New Demo Request",
      html: `
        <h2>Demo Request</h2>

        <pre>
${JSON.stringify(body, null, 2)}
        </pre>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}