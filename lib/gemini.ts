"use server";

export async function generateChatResponse(
  history: { role: string; text: string }[],
  newMessage: string,
  chapterContext: string
) {
  // Truncate context to ~3000 chars (~750 tokens) to stay within free tier limits
  const trimmedContext = chapterContext.slice(0, 3000);

  const systemPrompt = `You are an insightful and engaging literary companion. Answer questions based only on the chapter context provided below. If the reader asks something outside the scope of the chapter, gently guide them back to the story, analyzing characters, plot, and themes. Keep answers concise, engaging, and easy to understand.\n\nChapter Content:\n${trimmedContext}`;

  // Build messages array - Groq uses OpenAI-compatible format
  const messages: { role: string; content: string }[] = [
    { role: "system", content: systemPrompt },
  ];

  // Add history (skip leading model messages since OpenAI format requires user first)
  let startIndex = 0;
  while (startIndex < history.length && history[startIndex].role !== "user") {
    startIndex++;
  }
  for (const msg of history.slice(startIndex)) {
    messages.push({
      role: msg.role === "assistant" || msg.role === "model" ? "assistant" : "user",
      content: msg.text,
    });
  }

  // Add the new user message
  messages.push({ role: "user", content: newMessage });

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages,
      max_tokens: 512,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Groq API error: ${response.status} ${err}`);
  }

  const data = await response.json();
  return data.choices[0].message.content as string;
}
