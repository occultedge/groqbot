export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  const { message } = req.body;

  const systemPrompt = `
You are a skilled professor. When asked a question:
1. Teach clearly in simple steps with examples.
2. Then give a short quiz to test understanding.
3. If user responds:
   - If correct: praise and continue.
   - If wrong: explain the correct answer and reteach.
4. If the user says "start over", restart the lesson from scratch.
Always follow this cycle. Keep answers well formatted using markdown.
  `.trim();

  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: message }
  ];

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",  // ✅ this must be exact
        messages
      })
    });

    const data = await response.json();
    console.log("🔵 Groq response:", JSON.stringify(data));  // ✅ show Groq reply

    const reply = data.choices?.[0]?.message?.content || "AI could not respond.";
    res.status(200).json({ reply });

  } catch (error) {
    console.error("❌ Groq API Error:", error);  // ✅ will show in Vercel logs
    res.status(500).json({ reply: "Server error. Try again." });
  }
}
