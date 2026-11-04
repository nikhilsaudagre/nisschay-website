import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    // Get client IP address
    const ip = (request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "127.0.0.1").trim();
    
    // Enforce limit: 5 signups per 15 minutes per IP
    const limitCheck = rateLimit(ip, 5, 15 * 60 * 1000);
    if (!limitCheck.success) {
      return NextResponse.json(
        { error: `Too many requests. Please wait ${limitCheck.reset} seconds before trying again.` },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    // Server-side validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // Construct clean payload for FormSubmit
    const payload = {
      email: email.trim(),
      "Signed Up At (IST)": new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "medium",
      }),
      _subject: `Nisschay Newsletter Subscription`,
      message: `New subscription request registered for email stream: ${email.trim()}`,
      _autoresponse: `Thank you for subscribing to the Nisschay newsletter!

We will keep you updated with the latest in system engineering, product design, and web architecture.

Best regards,
The Nisschay Engineering Team`,
    };

    const referer = request.headers.get("referer") || "https://nisschay.com";
    const origin = request.headers.get("origin") || "https://nisschay.com";

    // Forward to FormSubmit AJAX endpoint using fetch
    const response = await fetch("https://formsubmit.co/ajax/hello@nisschay.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: referer,
        Origin: origin,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok && data.success === "true") {
      return NextResponse.json({ success: true, message: "Newsletter signup successful." });
    } else {
      console.error("FormSubmit Newsletter Error:", data);
      return NextResponse.json(
        { error: "Failed to register newsletter subscription." },
        { status: response.status || 500 }
      );
    }
  } catch (error: any) {
    console.error("Newsletter Subscription Catch Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during subscription." },
      { status: 500 }
    );
  }
}
