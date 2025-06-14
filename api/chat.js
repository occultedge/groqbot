export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  const { message, siteType = '', origin = '' } = req.body;
  const site = origin || req.headers.origin || 'this site';

  const siteConfigs = {
    "techoccult.com": {
      name: "TechOccult",
      summary: `
<strong>Programs Offered:</strong>
<ul>
  <li>Software Engineering, Web Development, Cybersecurity</li>
  <li>India-based Internship Opportunities</li>
  <li>UG & PG programs in Business, Nursing, IT, Agriculture, and Social Sciences</li>
  <li>Vocational Diplomas in Fashion Design, Beauty Therapy, Baking, Retail, Tourism</li>
  <li>Certifications: Web Dev, Cybersecurity, Data Analytics, Software Engineering</li>
  <li>British K–12 Online School</li>
  <li>Internships, LMS, Franchise options</li>
</ul>
📞 Contact:
<ul>
  <li>Email: <a href="mailto:info@occultedge.com">info@occultedge.com</a></li>
  <li>WhatsApp: <a href="https://wa.me/919953330039">+91 99533 30039</a></li>
</ul>
<a href="https://techoccult.com/admissions">Apply Now</a>
      `.trim()
    },
    "occultedgeusa.com": {
      name: "Occultedge USA",
      summary: `
<strong>Available Programs:</strong>
<ul>
  <li>Diplomas in Nursing, IT, Agriculture</li>
  <li>Sikkim Manipal University online degrees</li>
  <li>Vocational Training: Fashion, Retail, Beauty, Tourism</li>
  <li>K–12 School, Internships, Certifications</li>
  <li>Franchise opportunities and partner portals</li>
</ul>
📞 Contact:
<ul>
  <li>Email: <a href="mailto:info@occultedge.com">info@occultedge.com</a></li>
  <li>WhatsApp: <a href="https://wa.me/919953330039">+91 99533 30039</a></li>
</ul>
<a href="https://occultedge-kenya.com/register">Register Here</a>
      `.trim()
    }
    // Add more domains as needed
  };

  const context = siteConfigs[origin] || {
    name: "Occultedge",
    summary: `
<strong>Programs & Services:</strong>
<ul>
  <li>Diplomas: Nursing, IT, Agriculture, Fashion Design</li>
  <li>K–12 Online School (British-based)</li>
  <li>Vocational training & skill certifications</li>
  <li>Internship placements in India (certified)</li>
  <li>Exam registration & results</li>
</ul>
📞 Contact:
<ul>
  <li>Email: <a href="mailto:info@occultedge.com">info@occultedge.com</a></li>
  <li>WhatsApp: <a href="https://wa.me/919953330039">+91 99533 30039</a></li>
</ul>
<a href="https://www.occultedge.com/saint-austins-form">Start Application</a>
    `.trim()
  };

  let systemPrompt = `
You are <strong>EdgeMentor</strong>, an academic counselor for <strong>${context.name}</strong>.

📄 Here’s what the site offers:
${context.summary}

✅ Your Role:
- Guide students or parents to the right programs
- Explain how to apply, register, or join internships
- Always respond using <strong>, <ul>, <li>, and <a> HTML tags
🚫 Never mention Groq, OpenAI, language models, or APIs.

End replies with:
“Would you like help applying or exploring more programs? 😊”
  `.trim();

  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: message }
  ];

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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", // Use your key
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn’t respond.";
    res.status(200).json({ reply });

  } catch (error) {
    console.error("❌ API error:", error);
    res.status(500).json({ reply: "Server error. Please try again." });
  }
}
