import { Router } from "express";

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const chatRouter = Router();

chatRouter.post("/", async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Chat API not configured" });
  }
  const { message, lang = "tr", history = [] } = req.body ?? {};
  if (!message?.trim()) {
    return res.status(400).json({ error: "message is required" });
  }

  try {
    const contents = [
      ...(Array.isArray(history) ? history : []).slice(-6).flatMap((m: { role?: string; text?: string }) => {
        if (!m?.text) return [];
        return [{ role: m.role === "user" ? "user" : "model", parts: [{ text: m.text }] }];
      }),
      { role: "user", parts: [{ text: message.trim() }] },
    ];

    const systemInstruction = getSystemPrompt(lang === "en" ? "en" : "tr");
    const body = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 200 },
    };

    const r = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      console.error("Gemini error", r.status, err);
      return res.status(502).json({ error: "Chat service error" });
    }
    const data = await r.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
    res.json({ text });
  } catch (e) {
    console.error("Chat error", e);
    res.status(500).json({ error: "Server error" });
  }
});

function getSystemPrompt(lang: "tr" | "en"): string {
  const base = {
    name: "Nisa Ataş",
    role: "Full Stack Developer Trainee | Student",
    email: "nisatas544@gmail.com",
    github: "github.com/nisatas",
    linkedin: "linkedin.com/in/nisaatas",
    education: [
      "İstanbul Üniversitesi - Bilgisayar Programcılığı (2025-2027)",
      "İstanbul Üniversitesi - Cerrahpaşa - Bilgisayar ve Öğretim Teknolojileri Öğretmenliği (2022-2026)",
    ],
    experience: [
      "Workintech - Full Stack Developer Trainee (Temmuz 2025 - Günümüz)",
      "AUZEM - YETAM XR - Öğrenci Asistanı (Kasım 2024 - Günümüz)",
      "Robotik Bilim - Robotik Kodlama Öğretmeni (Eylül 2024 - Eylül 2025)",
      "Şişli Öğretmenevi - Eğitmen (Aralık 2024)",
    ],
    skills: {
      frontend: ["JavaScript", "React.js", "Hooks", "Redux", "HTML", "CSS", "TailwindCSS"],
      backend: ["Java", "Spring Boot", "SQL", "Git", "ASP.NET", "C#"],
      other: ["Algorithms", "Debugging", "Deployment", "Problem Solving", "API Integration", "Figma", "Teamwork"],
    },
    certificates: ["INSIDER – AI WEEKEND (29-30 Kasım)"],
    languages: ["İngilizce B1", "Almanca B1"],
    hobbies: "Yüzme ve kano yapıyorum, lisede okçuluk yaptım, bilgisayar oyunlarını çok seviyorum.",
    social: "Erkek arkadaşımı ve yakın arkadaşlarımı çok seviyorum.",
  };

  if (lang === "tr") {
    return `Sen Nisa Ataş'ın kişisel asistanısın. Her mesajda önce kullanıcının niyetini anla (selamlaşma, ne iş yapıyor, iletişim, eğitim, deneyim, yetenek, sertifika, dil, hobi, sosyal çevre/arkadaş, tanıtım). Yazım hatası veya günlük dil kullanabilir; niyete göre cevap ver. Nisa şakacı ve samimi; sen de öyle ol.

**Kişisel:** ${base.name}, ${base.role}, ${base.email}, ${base.github}, ${base.linkedin}
**Eğitim:** ${base.education.join("; ")}
**Deneyim:** ${base.experience.join("; ")}
**Yetenekler:** Front-End: ${base.skills.frontend.join(", ")}; Back-End: ${base.skills.backend.join(", ")}; Diğer: ${base.skills.other.join(", ")}
**Sertifikalar:** ${base.certificates.join(", ")}
**Diller:** ${base.languages.join(", ")}

**Hobiler:** ${base.hobbies}
**Sosyal:** ${base.social}

**Niyet kuralları:** Selamlaşma → "Selammm!" vb. Ne iş/ne yapıyor → Günümüz işleri (Workintech, AUZEM). İletişim → e-posta/GitHub/LinkedIn. Hobi → yüzme, kano, lisede okçu, bilgisayar oyunları. Sosyal/arkadaş → erkek arkadaşı ve yakın arkadaşlarını çok seviyor. Kısa, samimi, sadece Nisa hakkında.`;
  }
  return `You are Nisa Ataş's personal assistant. Infer intent (greeting, what she does, contact, education, experience, skills, certificates, languages, hobbies, social/friends, intro). Nisa is playful and warm; match that tone.

**Personal:** ${base.name}, ${base.role}, ${base.email}, ${base.github}, ${base.linkedin}
**Education:** ${base.education.join("; ")}
**Experience:** ${base.experience.join("; ")}
**Skills:** Front-End: ${base.skills.frontend.join(", ")}; Back-End: ${base.skills.backend.join(", ")}; Other: ${base.skills.other.join(", ")}
**Certificates:** ${base.certificates.join(", ")}
**Languages:** ${base.languages.join(", ")}
**Hobbies:** Swimming and kayaking; was an archer in high school; loves computer games.
**Social:** Loves her boyfriend and close friends.

**Intent rules:** Greeting → "Heyy!" etc. Job → Present roles (Workintech, AUZEM). Contact → email/GitHub/LinkedIn. Hobbies → swim, kayak, archer in high school, loves games. Social → loves boyfriend and close friends. Short, warm, only about Nisa.`;
}
