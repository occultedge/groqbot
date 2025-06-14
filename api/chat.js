export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  const { message, siteType = '', origin = '' } = req.body;
  const site = origin || req.headers.origin || 'this site';

  // 🌍 Custom content per microsite
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
  <li>Technical Certifications: Web Development, Cybersecurity, Data Analytics, Software Engineering, Hardware Support</li>
  <li>K–12 British-pattern Online School (Africa-focused)</li>
  <li>Academic support for Cameroon, Kenya, Uganda, Ghana, and more</li>
  <li>Internships in India with certification</li>
  <li>Franchise & Educational Consultant Opportunities</li>
  <li>Custom LMS via <a href="https://www.occultedge.com/orion-softtech">Orion Softtech</a></li>
  <li>Support: <a href="mailto:info@occultedge.com">info@occultedge.com</a>, <a href="https://wa.me/919953330039">+91 99533 30039</a></li>
</ul>
📎 Useful Links:
<ul>
  <li><a href="https://techoccult.com/admissions">Apply Now</a></li>
  <li><a href="https://wa.me/919876543210">WhatsApp Support</a></li>
</ul>
      `.trim()
    },

    "occultedgeusa.com": {
      name: "Occultedge USA",
      summary: `
<strong>Programs Available:</strong>
<ul>
  <li>Diplomas in Nursing, IT, and Agriculture</li>
  <li>Accredited Online Programs in Nursing, Information Technology, and Agricultural Sciences — including Bachelor's, Master's, and Diploma pathways from institutions like Sikkim Manipal University Online</li>
  <li>UG & PG programs in Business, Nursing, IT, Agriculture, and Social Sciences — including Sikkim Manipal University Online</li>
  <li>Vocational Diplomas in:
    <ul>
      <li>Fashion Design</li>
      <li>Beauty Therapy</li>
      <li>Baking</li>
      <li>Retail</li>
      <li>Tourism</li>
    </ul>
  </li>
  <li>Technical Certifications in:
    <ul>
      <li>Web Development</li>
      <li>Cybersecurity</li>
      <li>Data Analytics</li>
      <li>Software Engineering</li>
      <li>Hardware Support</li>
    </ul>
  </li>
  <li>British-patterned K–12 Online School for students across Africa</li>
  <li>Admission guidance and academic counseling tailored for Cameroon, Kenya, Uganda, Ghana, and more</li>
  <li>India-based Internship Programs with certification across healthcare, tech, and creative fields</li>
  <li>Exam schedules, result portals, and assignment uploads via centralized dashboard</li>
  <li>Franchise opportunities for educational centers and consultants in Africa and the Middle East</li>
  <li>Custom LMS platforms and digital portals from <a href="https://www.occultedge.com/orion-softtech">Orion Softtech</a></li>
  <li>24×7 Student Support:
    <ul>
      <li>WhatsApp: <a href="https://wa.me/919953330039">+91 99533 30039</a></li>
      <li>Email: <a href="mailto:info@occultedge.com">info@occultedge.com</a></li>
    </ul>
  </li>
  <li>Career-focused Internships and Skill Programs</li>
</ul>

📞 <strong>Contact:</strong>
<ul>
  <li><a href="https://occultedge-kenya.com/register">Register Here</a></li>
</ul>

      `.trim()
    }

    // ➕ Add more microsite summaries here
  };

  const context = siteConfigs[origin] || null;

  let systemPrompt = '';

  switch (siteType.toLowerCase()) {
    case 'tutor':
      systemPrompt = `
You are <strong>EdgeMentor</strong> — a highly qualified and engaging online tutor from Occultedge, assisting users on ${site}.

🎓 Your Role:
- Teach subjects like Math, Programming, Science, or English
- Explain clearly using HTML formatting (<strong>, <ul>, <li>, <br>)
- Give simple examples and short quizzes
- If users are wrong, explain and reteach gently
- Be friendly and patient, like a top human tutor

End replies with:
“Would you like a quick practice question next? 😊”
      `.trim();
      break;

    case 'counselor':
      systemPrompt = `
You are <strong>EdgeMentor</strong> — a knowledgeable and friendly academic counselor from Occultedge, currently serving users on ${site}.

🎓 Your Role:
- Guide students and parents in choosing programs (diploma, vocational, K–12)
- Explain how to apply, register, or get exam schedules
- Include links to forms, internships, franchise, and admissions when needed
- Offer WhatsApp, email, and other contact details
- Use HTML formatting for clear structure (<strong>, <ul>, <li>, <br>)

End replies with:
“Would you like help starting your application or choosing a program? 😊”
      `.trim();
      break;

    case 'admin':
      systemPrompt = `
You are <strong>EdgeMentor</strong> — a digital support assistant for school and academic administrators, powered by Occultedge.

🛠️ Your Role:
- Help with admin tasks like result uploads, assignment handling, student dashboards
- Clarify how to use the portal features and troubleshoot common issues
- Be direct, supportive, and clear
- Use HTML structure (<strong>, <ul>, <li>, <br>) for technical guidance

End replies with:
“Would you like help with a specific admin feature or form? 😊”
      `.trim();
      break;

    default:
      systemPrompt = `
You are <strong>EdgeMentor</strong> — the AI assistant for <strong>${context?.name || site}</strong>.

📄 Here’s what the site offers:
${context?.summary || "This site has not provided detailed content yet."}

🎓 Your Role:
- Only answer based on this site's content above
- Guide users to forms, programs, or contact links
- Use clean HTML (<strong>, <ul>, <li>, <br>)
- Never mention Groq, OpenAI, or API details

End replies with:
“Would you like help applying or exploring a program? 😊”
      `.trim();
      break;
  }

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
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "AI could not respond.";
    res.status(200).json({ reply });

  } catch (error) {
    console.error("❌ Groq API Error:", error);
    res.status(500).json({ reply: "Server error. Try again." });
  }
}
