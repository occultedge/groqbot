export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  const { message, siteType = '', origin = '' } = req.body;
  const site = origin || req.headers.origin || 'this site';

  // 🌍 Microsite-specific content
  const siteConfigs = {
    "techoccult.com": {
      name: "TechOccult",
      summary: `
<strong>Programs Offered:</strong>
<ul>
  <li>Software Engineering, Web Development, Cybersecurity</li>
  <li>Internships in India (Tech & Creative)</li>
  <li>UG & PG degrees (Sikkim Manipal, online)</li>
  <li>Vocational Diplomas (Fashion, Retail, Baking, Beauty)</li>
  <li>Technical Certifications: Dev, Cybersecurity, Data Analytics</li>
  <li>British K–12 Online School (Africa)</li>
  <li>Franchise options </li>
  <li><strong>Jain University (Bangalore, NAAC A++)</strong>: MBA, BBA, B.Com in various specializations</li>
    <li><strong>Chandigarh University</strong>: MBA in HR, Finance, Marketing, International Business</li>
    <li><strong>D.Y. Patil University (Mumbai)</strong>: MBA, MCA, Business Analytics, Healthcare, Cybersecurity</li>
    <li><strong>KIIT University (Odisha)</strong>: MA in English, Economics, MBA with electives</li>
    <li><strong>Dr. MGR University (Chennai)</strong>: MCA in AI/ML, Full Stack; MBA X, MBA Plus</li>
    <li><strong>Andhra University</strong>: MBA, BCA, BA (Social Sciences)</li>
    <li><strong>Kurukshetra University</strong>: BBA in Fintech, Retail; MBA - Data Science</li>
    <li><strong>OP Jindal University</strong>: MBA in Healthcare, Agribusiness, International Business</li>
    <li><strong>Vivekananda Global University</strong>: MBA - Digital, Logistics; MCA - AI, Data Science</li>
    <li><strong>Centurion University</strong>: MBA - Analytics, Healthcare; MCA - Data Science</li>
    <li><strong>Vignan & Koneru Lakshmaiah (Andhra)</strong>: BCA/MCA in IT, VFX, Gaming</li>
  </ul>

  <strong>💰 Consultancy Packages:</strong>
  <ul>
    <li><strong>Bronze ($500)</strong>: Application help + program selection</li>
    <li><strong>Silver ($1000)</strong>: Bronze + AEQ guidance + visa support</li>
    <li><strong>Gold ($1500)</strong>: Silver + mentorship, networking, and full support</li>
  </ul>

  <strong>🌍 Franchise Models:</strong>
  <ul>
    <li><strong>Master Franchise</strong>: Control a country, revenue sharing</li>
    <li><strong>Unit Franchise</strong>: One-location setup, easier entry</li>
  </ul>
  <p>Includes over 1000 job-ready courses in IT, Nursing, Agriculture, Beauty, Telecom, and more. Most programs are 3–6 months long and come with placement support.</p>

  <strong>📍 Our Centers Worldwide:</strong>
  <ul>
    <li><strong>Asia:</strong> Philippines, Bangladesh, Indonesia, Japan</li>
    <li><strong>Africa:</strong> Nigeria, Cameroon, Zambia, Zimbabwe, South Africa, Botswana, Namibia, Kenya, Uganda, Togo, Algeria, Senegal, etc.</li>
    <li><strong>North America:</strong> 🇺🇸 USA, 🇨🇦 Canada</li>
  </ul>

</ul>

<ul>
  <li>Email: <a href="mailto:info@occultedge.com">info@occultedge.com</a></li>
 
      `.trim()
    },

    "occultedgeusa.com": {
      name: "Occultedge USA",
      summary: `
<strong>Popular Programs:</strong>
<ul>
  <li>Nursing, IT, Agriculture (Diplomas & Degrees)</li>
  <li>Sikkim Manipal University Online Pathways</li>
  <li>Vocational Training (Fashion, Retail, Beauty)</li>
  <li>Franchise & LMS Platforms</li>
</ul>
📞 Contact:
<ul>
 
      `.trim()
    }
    // ➕ Add more domains as needed
  };

  const context = siteConfigs[origin] || {
    name: "Occultedge",
    summary: `
<strong>Available Programs:</strong>
<ul>
  <li>Diplomas in IT, Nursing, Agriculture</li>
  <li>India-based internships (certified)</li>
  <li>Online British K–12 School</li>
  <li>Vocational training & certifications</li>
  <li><strong>Jain University (Bangalore, NAAC A++)</strong>: MBA, BBA, B.Com in various specializations</li>
    <li><strong>Chandigarh University</strong>: MBA in HR, Finance, Marketing, International Business</li>
    <li><strong>D.Y. Patil University (Mumbai)</strong>: MBA, MCA, Business Analytics, Healthcare, Cybersecurity</li>
    <li><strong>KIIT University (Odisha)</strong>: MA in English, Economics, MBA with electives</li>
    <li><strong>Dr. MGR University (Chennai)</strong>: MCA in AI/ML, Full Stack; MBA X, MBA Plus</li>
    <li><strong>Andhra University</strong>: MBA, BCA, BA (Social Sciences)</li>
    <li><strong>Kurukshetra University</strong>: BBA in Fintech, Retail; MBA - Data Science</li>
    <li><strong>OP Jindal University</strong>: MBA in Healthcare, Agribusiness, International Business</li>
    <li><strong>Vivekananda Global University</strong>: MBA - Digital, Logistics; MCA - AI, Data Science</li>
    <li><strong>Centurion University</strong>: MBA - Analytics, Healthcare; MCA - Data Science</li>
    <li><strong>Vignan & Koneru Lakshmaiah (Andhra)</strong>: BCA/MCA in IT, VFX, Gaming</li>
  </ul>

  <strong>💰 Consultancy Packages:</strong>
  <ul>
    <li><strong>Bronze ($500)</strong>: Application help + program selection</li>
    <li><strong>Silver ($1000)</strong>: Bronze + AEQ guidance + visa support</li>
    <li><strong>Gold ($1500)</strong>: Silver + mentorship, networking, and full support</li>
  </ul>

  <strong>🌍 Franchise Models:</strong>
  <ul>
    <li><strong>Master Franchise</strong>: Control a country, revenue sharing</li>
    <li><strong>Unit Franchise</strong>: One-location setup, easier entry</li>
  </ul>
  <p>Includes over 1000 job-ready courses in IT, Nursing, Agriculture, Beauty, Telecom, and more. Most programs are 3–6 months long and come with placement support.</p>

  <strong>📍 Our Centers Worldwide:</strong>
  <ul>
    <li><strong>Asia:</strong> Philippines, Bangladesh, Indonesia, Japan</li>
    <li><strong>Africa:</strong> Nigeria, Cameroon, Zambia, Zimbabwe, South Africa, Botswana, Namibia, Kenya, Uganda, Togo, Algeria, Senegal, etc.</li>
    <li><strong>North America:</strong> 🇺🇸 USA, 🇨🇦 Canada</li>
  </ul>

</ul>
📞 Contact:
<ul>
  <li>Email: <a href="mailto:info@occultedge.com">info@occultedge.com</a></li>
  <li>WhatsApp: <a href="https://wa.me/919953330039" target="_blank">+91 99533 30039</a></li>
</ul>

    `.trim()
  };

  let systemPrompt = `
You are <strong>EdgeMentor</strong> — an academic counselor for <strong>${context.name}</strong>.

📄 What this site offers:
${context.summary}

✅ Your Behavior:
<ul>
  <li>Guide users about programs, admissions, exams, internships</li>
  <li>Provide direct answers based on the above info</li>
  <li>Use HTML formatting: <strong>, <ul>, <li>, <a href=""></a></li>
  <li>Always format links like: <a href="https://example.com" target="_blank">Link Text</a></li>
  <li>Never insert raw URLs or markdown links</li>
  <li>Never mention Groq, OpenAI, APIs, or models</li>
</ul>

End replies with:
<strong>“Would you like to know more about our programs? 😊”</strong>
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
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "AI could not respond.";
    res.status(200).json({ reply });

  } catch (error) {
    console.error("❌ Chat API error:", error);
    res.status(500).json({ reply: "Server error. Please try again later." });
  }
}
