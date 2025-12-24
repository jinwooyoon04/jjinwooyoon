import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Placeholder validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Placeholder: In a real application, you would:
    // - Send an email using a service like Resend, SendGrid, etc.
    // - Save to a database
    // - Send a notification

    // For now, just log and return success
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

