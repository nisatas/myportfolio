import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";
import { CHATAPI_CONFIG, getSystemPrompt } from "../config/chatapi";
import { apiBase } from "../api";

type Msg = { from: "user" | "bot"; text: string };

// Fallback function - ChatAPI çalışmazsa kullanılır
function fallbackAnswer(lang: "tr" | "en", q: string) {
  const s = q.toLowerCase().trim();

  if (lang === "tr") {
    const greetingTr = /^(selam|selm|selamm|selan|merhaba|merhab|meraba|merha|mrb|slm|hey|naber|sa|selamlar|merhabalar)[\s!.]*$/i.test(s);
    if (greetingTr) return "Selammm! Nasılsın? Nisa hakkında ne öğrenmek istersin?";
    const jobIntent = /ne\s*(iş|yapıyor|yapıyorsun|işe)|işin\s*ne|nerede\s*çalış|şu\s*an\s*ne|şuan\s*ne|napiyon|ne iş/;
    if (jobIntent.test(s)) return "Şu an Workintech'te Full Stack Developer Trainee ve AUZEM YETAM XR'da öğrenci asistanı olarak devam ediyorum.";
    const contactIntent = /iletişim|ulaş|ulaşırım|mail|e-?posta|linkedin|github|email|numara|telefon|iletişim\s*bilgi/;
    if (contactIntent.test(s)) return "E-posta: nisatas544@gmail.com, GitHub: github.com/nisatas, LinkedIn: linkedin.com/in/nisaatas. İletişim bölümünden detaylı bilgilere ulaşabilirsin.";
    const whoIntent = /kim(dir)?|kimsin|tanıt|hakkında|tanıyabilir|nisa\s*ne|nisa\s*kim/;
    if (whoIntent.test(s) || s.includes("nisa")) return "Ben Nisa Ataş. Full Stack Developer Trainee ve öğrenciyim. Modern web teknolojileriyle projeler geliştirmeye ilgi duyuyorum. Robotik kodlama, yazılım geliştirme ve yapay zeka alanlarında deneyime sahibim.";
    if (s.includes("teknoloji") || s.includes("stack") || s.includes("yetenek") || s.includes("beceri")) return "Front-End: JavaScript, React.js, Hooks, Redux, HTML, CSS, TailwindCSS. Back-End: Java, Spring Boot, SQL, Git, ASP.NET, C#. Diğer: Algorithms, Debugging, Deployment, Problem Solving, API Integration, Figma, Teamwork.";
    if (s.includes("eğitim") || s.includes("okul") || s.includes("üniversite")) return "İstanbul Üniversitesi - Bilgisayar Programcılığı (2025-2027) ve İstanbul Üniversitesi - Cerrahpaşa - Bilgisayar ve Öğretim Teknolojileri Öğretmenliği (2022-2026) öğrencisiyim.";
    if (s.includes("deneyim") || s.includes("çalışma")) return "Workintech'te Full Stack Developer Trainee olarak çalışıyorum (Temmuz 2025 - Günümüz). Ayrıca AUZEM - YETAM XR'da öğrenci asistanı, Robotik Bilim'de robotik kodlama öğretmeni ve Şişli Öğretmenevi'nde eğitmen olarak deneyimlerim var.";
    if (s.includes("iş") || s.includes("workintech")) return "Workintech'te Full Stack Developer Trainee olarak çalışıyorum (Temmuz 2025 - Günümüz). Ayrıca AUZEM - YETAM XR'da öğrenci asistanı.";
    if (s.includes("sertifika") || s.includes("certificate")) return "INSIDER – AI WEEKEND (29-30 Kasım) sertifikasına sahibim. LLM temelleri ve n8n ile otomasyon geliştirme alanlarında eğitim aldım.";
    if (s.includes("dil") || s.includes("ingilizce") || s.includes("almanca")) return "İngilizce ve Almanca dillerinde B1 seviyesindeyim.";
    const hobbyIntent = /hobi|hobiler|boş\s*zaman|ne\s*yaparsın|oyun\s*sever|okçuluk|yüzme|kano|oyun\s*oynar/;
    if (hobbyIntent.test(s)) return "Yüzme ve kano yapıyorum, lisede okçuluk yaptım—okçuydum. Bilgisayar oyunlarını da çok seviyorum.";
    const socialIntent = /sosyal|arkadaş|erkek\s*arkadaş|özel\s*hayat|aile|sevgili|yakın\s*arkadaş/;
    if (socialIntent.test(s)) return "Erkek arkadaşımı ve yakın arkadaşlarımı çok seviyorum.";
    return "Bunu tam anlayamadım. Eğitim, deneyim, yetenekler, hobiler, sertifikalar, diller veya iletişim hakkında sorabilirsin.";
  } else {
    const greetingEn = /^(hi|hii|hey|heyy|hello|helo|helloo|sup|yo|hi there|hello there)[\s!.]*$/i.test(s) || (s.length <= 10 && /^hi+i?|^hel+o+|^hey+$/i.test(s.replace(/\s/g, "")));
    if (greetingEn) return "Heyy! How are you? What would you like to know about Nisa?";
    const jobIntentEn = /what(\s+does\s+she)?\s+do|current\s+job|where\s+(does\s+she\s+)?work|doing\s+now|what\s+is\s+nisa/;
    if (jobIntentEn.test(s)) return "Right now I'm a Full Stack Developer Trainee at Workintech and a student assistant at AUZEM YETAM XR.";
    const contactIntentEn = /contact|reach|email|linkedin|github|how\s+to\s+(contact|reach)|get\s+in\s+touch/;
    if (contactIntentEn.test(s)) return "Email: nisatas544@gmail.com, GitHub: github.com/nisatas, LinkedIn: linkedin.com/in/nisaatas. You can find more in the Contact section.";
    if (s.includes("who") || s.includes("about") || s.includes("nisa") || s.includes("tell me about")) return "I'm Nisa Ataş, a Full Stack Developer Trainee and student. I'm interested in modern web tech, and I have experience in robotics, software development, and AI.";
    if (s.includes("tech") || s.includes("stack") || s.includes("skills")) return "Front-End: JavaScript, React.js, Hooks, Redux, HTML, CSS, TailwindCSS. Back-End: Java, Spring Boot, SQL, Git, ASP.NET, C#. Other: Algorithms, Debugging, Deployment, Problem Solving, API Integration, Figma, Teamwork.";
    if (s.includes("education") || s.includes("school") || s.includes("university")) return "I'm a student at Istanbul University - Computer Programming (2025-2027) and Istanbul University - Cerrahpaşa - Computer and Instructional Technologies Education (2022-2026).";
    if (s.includes("experience") || s.includes("work") || s.includes("workintech") || s.includes("job")) return "I work as a Full Stack Developer Trainee at Workintech (July 2025 - Present). I also have experience as a student assistant at AUZEM - YETAM XR, robotics coding teacher at Robotics Science, and instructor at Şişli Teachers' House.";
    if (s.includes("certificate") || s.includes("certification")) return "I have the INSIDER – AI WEEKEND (November 29-30) certificate. I received training in LLM fundamentals and automation development with n8n.";
    if (s.includes("language") || s.includes("english") || s.includes("german")) return "I have B1 level in English and German.";
    const hobbyIntentEn = /hobb(y|ies)|free\s*time|what\s+do\s+you\s+do\s+for\s+fun|do\s+you\s+play\s+games|archer|swim|kayak|gaming/;
    if (hobbyIntentEn.test(s)) return "I swim and do kayaking, I was an archer in high school, and I love computer games.";
    const socialIntentEn = /social|friend|boyfriend|personal\s*life|family|relationship|close\s*friend/;
    if (socialIntentEn.test(s)) return "I love my boyfriend and my close friends.";
    return "I'm not sure I got that. Ask about education, experience, skills, hobbies, certificates, languages, or contact.";
  }
}

// Backend varsa /api/chat, yoksa doğrudan Gemini
async function sendToChatAPI(lang: "tr" | "en", question: string, conversationHistory: Msg[]): Promise<string> {
  if (apiBase) {
    try {
      const res = await fetch(`${apiBase}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          lang,
          history: conversationHistory.slice(-6).map((m) => ({ role: m.from === "user" ? "user" : "model", text: m.text })),
        }),
      });
      if (!res.ok) throw new Error("Chat API error");
      const data = await res.json();
      return data.text ?? fallbackAnswer(lang, question);
    } catch (e) {
      console.error("Backend chat error", e);
      return fallbackAnswer(lang, question);
    }
  }
  if (!CHATAPI_CONFIG.apiKey) {
    console.warn("Gemini API key (VITE_GEMINI_API_KEY) tanımlı değil, yerel cevap kullanılıyor.");
    return fallbackAnswer(lang, question);
  }

  try {
    const history = conversationHistory.slice(-6).map((msg) => ({
      role: msg.from === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    const body = {
      systemInstruction: { parts: [{ text: getSystemPrompt(lang) }] },
      contents: [...history, { role: "user", parts: [{ text: question }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 200 },
    };

    const response = await fetch(
      `${CHATAPI_CONFIG.generateContentUrl}?key=${CHATAPI_CONFIG.apiKey}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
    );

    if (!response.ok) throw new Error(`Gemini API: ${response.status}`);
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
    return text || fallbackAnswer(lang, question);
  } catch (error) {
    console.error("ChatAPI error:", error);
    return fallbackAnswer(lang, question);
  }
}

export default function PixelChatbot() {
  const { lang, theme } = useApp();
  const t = content[lang];

  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: lang === "tr" ? "Merhaba! Bana Nisa hakkında soru sor." : "Hi! Ask me about Nisa." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: lang === "tr"
          ? "Merhaba! Bana Nisa hakkında soru sor."
          : "Hi! Ask me about Nisa.",
      },
    ]);
    setInput("");
  }, [lang]);

  const send = async () => {
    const q = input.trim();
    if (!q || isLoading) return;

    // Güncel mesajları hesapla (kullanıcı mesajını dahil et)
    const updatedMessages = [...messages, { from: "user" as const, text: q }];
    
    // Kullanıcı mesajını ekle
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // ChatAPI'ye gönder (güncel mesajları kullan)
      const answer = await sendToChatAPI(lang, q, updatedMessages);
      
      // Bot cevabını ekle
      setMessages((prev) => [...prev, { from: "bot", text: answer }]);
    } catch (error) {
      console.error("Error sending message:", error);
      const fallback = fallbackAnswer(lang, q);
      setMessages((prev) => [...prev, { from: "bot", text: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full terminal-window">
      <div className={`rounded-lg overflow-hidden ${theme === "dark" ? "bg-[#0d1117] border border-[#30363d]" : "bg-[#1e1e1e] border border-[#404040]"}`} style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
        {/* Terminal title bar */}
        <div className={`flex items-center gap-2 px-3 py-2 ${theme === "dark" ? "bg-[#161b22] border-b border-[#30363d]" : "bg-[#2d2d2d] border-b border-[#404040]"}`}>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className={`font-mono text-[10px] sm:text-xs ml-2 ${theme === "dark" ? "text-[#8b949e]" : "text-[#9e9e9e]"}`}>
            nisa@nisabot:~$
          </span>
        </div>

        {/* Terminal output */}
        <div className={`p-3 sm:p-4 font-mono text-xs sm:text-sm max-h-48 sm:max-h-56 overflow-auto ${theme === "dark" ? "text-[#58a6ff]" : "text-[#9cdcfe]"}`} style={{ background: theme === "dark" ? "#0d1117" : "#1e1e1e" }}>
          {messages.map((m, i) => (
            <div key={i} className="flex flex-col gap-0.5 mb-2">
              <span className={`inline-block font-mono ${m.from === "user" ? (theme === "dark" ? "text-[#7ee787]" : "text-[#4ec9b0]") : (theme === "dark" ? "text-[#58a6ff]" : "text-[#9cdcfe]")}`}>
                {m.from === "user" ? "you@nisa:~$" : "nisabot>"}
              </span>
              <pre className={`whitespace-pre-wrap break-words font-mono text-[11px] sm:text-xs mt-0.5 ${m.from === "user" ? (theme === "dark" ? "text-[#e6edf3]" : "text-[#d4d4d4]") : (theme === "dark" ? "text-[#c9d1d9]" : "text-[#ce9178]")}`}>
                {m.text}
              </pre>
            </div>
          ))}
        </div>

        {/* Terminal input line */}
        <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 border-t ${theme === "dark" ? "border-[#30363d] bg-[#161b22]" : "border-[#404040] bg-[#2d2d2d]"}`}>
          <span className={`font-mono text-xs shrink-0 ${theme === "dark" ? "text-[#7ee787]" : "text-[#4ec9b0]"}`}>$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
            placeholder={t.chatbot.placeholder}
            className={`flex-1 font-mono text-xs sm:text-sm bg-transparent outline-none placeholder:opacity-60 ${theme === "dark" ? "text-[#e6edf3] placeholder-[#8b949e]" : "text-[#d4d4d4] placeholder-[#6e6e6e]"}`}
          />
          <button
            onClick={send}
            disabled={isLoading}
            className={`font-mono text-[10px] px-2 py-1 rounded ${theme === "dark" ? "bg-[#238636] hover:bg-[#2ea043] text-[#7ee787]" : "bg-[#0e639c] hover:bg-[#1177bb] text-[#9cdcfe]"} disabled:opacity-50 transition-colors`}
          >
            {isLoading ? "..." : "↵"}
          </button>
        </div>
      </div>
    </div>
  );
}
