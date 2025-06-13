const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Groq AI Chatbot</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f5f7fa;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .chat-container {
          background: #fff;
          width: 95%;
          max-width: 600px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        #chat {
          height: 400px;
          overflow-y: auto;
          border: 1px solid #ddd;
          padding: 10px;
          margin-bottom: 16px;
          border-radius: 8px;
          background: #fafafa;
        }
        .message {
          margin: 10px 0;
          line-height: 1.6;
        }
        .user { color: #1a73e8; }
        .ai { color: #0f9d58; }
        form {
          display: flex;
          gap: 10px;
        }
        input[type="text"] {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        button {
          padding: 10px 18px;
          background-color: #1a73e8;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #125cc2;
        }
      </style>
    </head>
    <body>

      <div class="chat-container">
        <div id="chat"></div>
        <form id="chatForm">
          <input type="text" id="userInput" placeholder="Type your message..." required />
          <button type="submit">Send</button>
        </form>
      </div>

      <script>
        const chatDiv = document.getElementById('chat');
        const form = document.getElementById('chatForm');
        const input = document.getElementById('userInput');

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const msg = input.value.trim();
          if (!msg) return;

          chatDiv.innerHTML += '<div class="message user"><b>You:</b> ' + msg + '</div>';
          input.value = '';
          chatDiv.scrollTop = chatDiv.scrollHeight;

          const res = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
          });

          const data = await res.json();
          chatDiv.innerHTML += '<div class="message ai"><b>AI:</b> ' + data.reply + '</div>';
          chatDiv.scrollTop = chatDiv.scrollHeight;
        });
      </script>

    </body>
    </html>
  `);
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  const referer = req.headers.referer || "";
  let systemPrompt = "You are a helpful assistant.always give formatted replies and ask questions based on user queries.";

  // 👇 Customize behavior based on site
  if (referer.includes("healthsite.com")) {
    systemPrompt = "You are a senior medical counselor helping users with health advice and wellness queries.";
  } else if (referer.includes("schoolsite.com")) {
    systemPrompt = "You are a friendly academic advisor guiding students about career options, study tips, and courses.also guide students by asking questions based on thier queries.";
  } else if (referer.includes("shop.example.com")) {
    systemPrompt = "You are a shopping assistant recommending popular products, deals, and gift ideas.";
  } else {
    systemPrompt = "You are a general-purpose assistant supporting users on this website.";
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ]
    })
  });

  const result = await response.json();
  const reply = result.choices?.[0]?.message?.content || "No response from AI.";
  res.json({ reply });
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
