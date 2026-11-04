import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    // Get client IP address
    const ip = (request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "127.0.0.1").trim();
    
    // Enforce limit: 3 submissions per 5 minutes per IP
    const limitCheck = rateLimit(ip, 3, 5 * 60 * 1000);
    if (!limitCheck.success) {
      return NextResponse.json(
        { error: `Too many requests. Please wait ${limitCheck.reset} seconds before trying again.` },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, mobile, country, selectedService, brief } = body;

    // Server-side validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !name.trim() || !email || !emailRegex.test(email.trim()) || !brief || !brief.trim()) {
      return NextResponse.json(
        { error: "Please provide a valid name, email address, and project description." },
        { status: 400 }
      );
    }

    // Construct clean payload for FormSubmit
    const payload = {
      name: name.trim(),
      email: email.trim(),
      mobile: (mobile && mobile.trim()) || "Not Provided",
      country: (country && country.trim()) || "Not Provided",
      service: selectedService || "General Web & SaaS Development",
      message: brief.trim(),
      "Submitted At (IST)": new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "medium",
      }),
      _subject: `New Nisschay Lead: ${selectedService || "General Inquiry"} from ${name}`,
      _autoresponse: `Thank you for reaching out to Nisschay!

We have received your project details and our team is already reviewing them. We aim to get back to you with a structural system blueprint or coordinate a scoping call in under 4 hours.

If you have any additional materials (e.g. design assets, specs, or wireframes), feel free to reply directly to this email.

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
      return NextResponse.json({ success: true, message: "Inquiry successfully submitted." });
    } else {
      console.error("FormSubmit API error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to forward inquiry to the email dispatcher." },
        { status: response.status || 500 }
      );
    }
  } catch (error: any) {
    console.error("Inquiry Submission Catch Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during submission." },
      { status: 500 }
    );
  }
}
