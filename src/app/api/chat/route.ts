import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, model } = body;

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulated response based on the last message
    const lastMessage = messages[messages.length - 1].content.toLowerCase();
    let reply = `This is a simulated response from the ${model} model. I received your message about "${lastMessage.substring(0, 50)}...". I am currently a Sandbox placeholder. Please add an actual Anthropic/OpenAI API key and logic here.`;

    if (lastMessage.includes('strategy') || lastMessage.includes('cost')) {
      reply = "AI can significantly reduce operational costs by automating repetitive tasks, optimizing supply chains, and predicting maintenance needs. For strategic implementation, we recommend starting with a pilot matching your highest-friction processes.";
    } else if (lastMessage.includes('data mesh')) {
      reply = "A data mesh is a decentralized approach to data architecture. Instead of a monolithic data lake, it treats data as a product, grouping it by business domain (e.g., Marketing, Sales). This allows for greater scalability and agility in accessing insights.";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
