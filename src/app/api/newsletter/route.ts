import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Newsletter Subscription Request Received:", body);

    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || "dummy";
    
    if (web3formsAccessKey !== "dummy") {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          subject: "New Newsletter Subscriber - AdvaitAI",
          ...body
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        return NextResponse.json({ success: true, message: "Subscribed successfully" });
      } else {
        throw new Error(result.message || 'Failed to subscribe via Web3Forms');
      }
    } else {
      // Simulate if no key
      console.log("Simulating newsletter subscription since WEB3FORMS_ACCESS_KEY is not set.");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Subscription simulated successfully" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to process newsletter subscription' }, { status: 500 });
  }
}
