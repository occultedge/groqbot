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
📌 All responses must use proper HTML formatting only:
<ul>
  <li>Use &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;br&gt;, and &lt;a href="..."&gt;</li>
  <li>Never output plain text links or unformatted program names</li>
  <li>Use bullet lists (ul/li) for any course, program, or step-by-step item</li>
</ul>
🚫 Absolutely no raw URLs, no markdown, no inconsistent casing or layout.
✅ Every message must look clean, structured, and web-ready.
<ul>
  <li>Software Engineering, Web Development, Cybersecurity</li>
  <li>Internships in India (Tech & Creative)</li>
  <li>UG & PG degrees (Sikkim Manipal, online)</li>
  <strong>🎓 Sample Programs Available at Occultedge</strong>
  <p>We offer 1000+ government-supported vocational, diploma, and degree courses — job-ready, online, and internationally accepted.</p>

  <strong>Popular Program Categories:</strong>
  
    <li><strong>Beauty & Wellness:</strong> Advanced Beauty Therapy, Basic Life Support (BLS)</li>
    <li><strong>Healthcare & Safety:</strong> Advanced Fire Safety, Basic Firefighting & Safety, Nursing, Public Health</li>
    <li><strong>Engineering & Tech:</strong> Civil Engineering, AI & Data Science, Computer Applications, IT & Networking</li>
    <li><strong>Mobile & Electronics:</strong> Advanced Mobile Phone Repairing, Automotive Diagnostics</li>
    <li><strong>Hospitality & Management:</strong> Hotel & Tourism Management, Management Studies, Business Administration</li>
    <li><strong>Agriculture & Food Processing:</strong> Agro-Packaging, Allied Health Sciences</li>
  </ul>

  <strong>💡 Program Formats:</strong>
  <ul>
    <li>Short-term Certifications (2 days to 6 months)</li>
    <li>Diplomas (6–18 months)</li>
    <li>UG/PG Degrees (BBA, B.Sc., B.Tech, MBA, MCA, M.Sc., etc.)</li>
    <li>Internship-integrated + India visit options</li>
  </ul>

  <strong>🌐 Learning Modes:</strong>
  <ul>
    <li>Online (Live classes + LMS)</li>
    <li>Hybrid (80% online + 20% local facilitation)</li>
    <li>On-campus (India/Partner Institutions)</li>
  
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

  <div>
  <strong>🚀 Franchise Opportunity with Occultedge India</strong><br><br>

  <strong>🌍 Global Demand:</strong><br>
  There’s an intense demand worldwide for vocational education, training, and job placement. Occultedge is expanding and actively seeking <strong>franchise partners</strong> across countries to replicate our successful India model.<br><br>

  <strong>📘 About Occultedge:</strong>
  <ul>
    <li>India’s #1 vocational education company</li>
    <li>Operating in 31+ countries across Asia, Africa, and the Americas</li>
    <li>Visit us: <a href="https://www.occultedge.com" target="_blank">www.occultedge.com</a></li>
  </ul>

  <strong>📚 Our Education Model:</strong>
  <ul>
    <li>Blended learning: 80% live online + 20% local facilitation</li>
    <li>Full support for admissions, training, placements, and student management</li>
    <li>Courses: Certificates to PhDs (2 days to 4 years)</li>
    <li>India-based internships for global employability</li>
  </ul>
<div>
  <strong>🚀 Franchise Opportunity with Occultedge India</strong><br><br>

  <strong>🌍 Global Demand:</strong><br>
  There’s an intense demand worldwide for vocational education, training, and job placement. Occultedge is expanding and actively seeking <strong>franchise partners</strong> across countries to replicate our successful India model.<br><br>

  <strong>📘 About Occultedge:</strong>
  <ul>
    <li>India’s #1 vocational education company</li>
    <li>Operating in 31+ countries across Asia, Africa, and the Americas</li>
    <li>Visit us: <a href="https://www.occultedge.com" target="_blank">www.occultedge.com</a></li>
  </ul>

  <strong>📚 Our Education Model:</strong>
  <ul>
    <li>Blended learning: 80% live online + 20% local facilitation</li>
    <li>Full support for admissions, training, placements, and student management</li>
    <li>Courses: Certificates to PhDs (2 days to 4 years)</li>
    <li>India-based internships for global employability</li>
  </ul>

  <strong>🎓 Course Domains (1000+ Available):</strong>
  <ul>
    <li>Cell Phone Repair, IT, Software, Networking</li>
    <li>Hotel Management, Agriculture, Beauty & Health</li>
    <li>Telecom, Nursing, Management, Fire Safety, Auto, and more</li>
  </ul>

  <strong>🤝 What’s Expected of You:</strong>
  <ul>
    <li>Start online, then launch a physical center</li>
    <li>Identify and manage additional locations</li>
    <li>Share revenue across Retail, E-learning, Corporate & Government sectors</li>
    <li>100 sq. meter center + 3 staff (including yourself)</li>
  </ul>

  <strong>📄 Next Steps:</strong>
  <ul>
    <li>Sign an MOU with initial deposit</li>
    <li>Attend 2-day induction & planning</li>
    <li>Franchise agreement signed within 45 days</li>
    <li>We provide platform, ERP, website, and staff training</li>
  </ul>

  🎥 <strong>Demo:</strong> <a href="https://www.youtube.com/watch?v=Xe8F2ZyUW2g&t=39s" target="_blank">Watch Our Student Management System Demo</a><br><br>

  <strong>💰 Franchise Models & Pricing:</strong>
  <ul>
    <li><strong>Master Franchise:</strong> USD 8000<br>(Jurisdiction: entire country)</li>
    <li><strong>Unit Franchise:</strong> USD 4000<br>(Jurisdiction: single location)</li>
    <li><strong>Initial Deposit with MOU:</strong><br>Master: USD 2000<br>Unit: USD 1000</li>
  </ul>

 
  

  <em>We look forward to building your center with you. — Occultedge India</em>
</div>

  <strong>🎓 Course Domains (1000+ Available):</strong>
  <ul>
    <li>Cell Phone Repair, IT, Software, Networking</li>
    <li>Hotel Management, Agriculture, Beauty & Health</li>
    <li>Telecom, Nursing, Management, Fire Safety, Auto, and more</li>
  </ul>

  <strong>🤝 What’s Expected of You:</strong>
  <ul>
    <li>Start online, then launch a physical center</li>
    <li>Identify and manage additional locations</li>
    <li>Share revenue across Retail, E-learning, Corporate & Government sectors</li>
    <li>100 sq. meter center + 3 staff (including yourself)</li>
  </ul>

  <strong>📄 Next Steps:</strong>
  <ul>
    <li>Sign an MOU with initial deposit</li>
    <li>Attend 2-day induction & planning</li>
    <li>Franchise agreement signed within 45 days</li>
    <li>We provide platform, ERP, website, and staff training</li>
  </ul>

  🎥 <strong>Demo:</strong> <a href="https://www.youtube.com/watch?v=Xe8F2ZyUW2g&t=39s" target="_blank">Watch Our Student Management System Demo</a><br><br>

  <strong>💰 Franchise Models & Pricing:</strong>
  <ul>
    <li><strong>Master Franchise:</strong> USD 8000<br>(Jurisdiction: entire country)</li>
    <li><strong>Unit Franchise:</strong> USD 4000<br>(Jurisdiction: single location)</li>
    <li><strong>Initial Deposit with MOU:</strong><br>Master: USD 2000<br>Unit: USD 1000</li>
  </ul>

  <strong>📧 Contact:</strong><br>
  <a href="mailto:info@occultedge.com" target="_blank">info@occultedge.com</a><br>
  <a href="https://wa.me/919953330039" target="_blank">WhatsApp: +91 99533 30039</a><br><br>

  <em>We look forward to building your center with you. — Occultedge India</em>
</div>

  

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
