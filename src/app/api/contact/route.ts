import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    // basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <hello@nicolascaminero.com>",
      to: "caminero@alumni.stanford.edu",
      subject: `[Portfolio] ${subject}`,

      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

           <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
