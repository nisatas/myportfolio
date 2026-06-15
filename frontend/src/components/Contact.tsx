import { useState } from "react";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";
import { toast } from "react-toastify";
import { apiBase } from "../api";

export default function Contact() {
  const { lang, theme } = useApp();
  const t = content[lang];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const CONTACT_EMAIL = "nisatas544@gmail.com";

  const getGmailComposeUrl = (subject: string, body: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (apiBase) {
      try {
        const res = await fetch(`${apiBase}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() }),
        });
        if (!res.ok) throw new Error("Send failed");
        setFormData({ name: "", email: "", message: "" });
        toast.success(lang === "tr" ? "Mesajınız gönderildi." : "Your message was sent.", { position: "top-right", autoClose: 4000 });
      } catch {
        toast.error(lang === "tr" ? "Gönderilemedi. Gmail ile deneyin." : "Could not send. Try Gmail.", { position: "top-right", autoClose: 4000 });
      }
      return;
    }

    const subject = lang === "tr" ? `Portföy iletişim — ${formData.name}` : `Portfolio contact — ${formData.name}`;
    const body = (lang === "tr" ? "İsim" : "Name") + `: ${formData.name}\n` + (lang === "tr" ? "E-posta" : "Email") + `: ${formData.email}\n\n` + (lang === "tr" ? "Mesaj" : "Message") + ":\n" + formData.message;
    window.open(getGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
    setFormData({ name: "", email: "", message: "" });
    toast.success(lang === "tr" ? "Gmail yeni sekmede açıldı. Mesajınızı orada gönderin." : "Gmail opened in a new tab. Send your message there.", { position: "top-right", autoClose: 4000 });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className={`section-minecraft-overlay ${theme === "dark" ? "section-minecraft-overlay-dark" : "section-minecraft-overlay-light"}`} />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <div 
          className={`panel-minecraft p-6 sm:p-8 md:p-12 lg:p-16 relative z-0 ${theme === "dark" ? "panel-minecraft-dark" : "panel-minecraft-light"}`}
        >
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 md:mb-10 text-center ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            style={{
              textShadow: theme === "dark" 
                ? "2px 2px 0px #1a1a1a, 0 0 10px rgba(34, 197, 94, 0.5)"
                : "2px 2px 0px #d0d0d0, 0 0 10px rgba(34, 197, 94, 0.3)"
            }}
          >
            {t.contact.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{t.contact.infoTitle}</h3>
              
              {t.contact.info.map((item: any, index: number) => {
                const isEmail = item.label === "E-posta" || item.label === "Email";
                const isLinkedIn = item.label === "LinkedIn";
                const iconSrc = isEmail ? "/eposta.png" : isLinkedIn ? "/linkedin.png" : "/github.png";
                return (
                <div
                  key={index}
                  className={`card-minecraft p-4 relative ${theme === "dark" ? "card-minecraft-dark" : "card-minecraft-light"}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={iconSrc}
                      alt={item.label}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
                    />
                    <div>
                      <p className={`font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{item.label}</p>
                      <a
                        href={
                          item.label === "E-posta" || item.label === "Email"
                            ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`
                            : (item.link || "#")
                        }
                        target={item.label === "E-posta" || item.label === "Email" || item.label === "LinkedIn" || item.label === "GitHub" ? "_blank" : undefined}
                        rel={item.label === "E-posta" || item.label === "Email" || item.label === "LinkedIn" || item.label === "GitHub" ? "noopener noreferrer" : undefined}
                        className={`${theme === "dark" ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"} transition-colors text-sm sm:text-base underline decoration-cyan-500/50 hover:decoration-cyan-400`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              );
              })}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className={`block mb-2 font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className={`w-full ${theme === "dark" ? "bg-[#2a2a2a] text-white placeholder-gray-400" : "bg-[#f5f5f5] text-gray-900 placeholder-gray-500"} px-3 sm:px-4 py-2 sm:py-3 outline-none transition-colors`}
                  style={{
                    border: `2px solid ${theme === "dark" ? "#1a1a1a" : "#d0d0d0"}`,
                    borderTopColor: theme === "dark" ? "#4a4a4a" : "#ffffff",
                    borderLeftColor: theme === "dark" ? "#4a4a4a" : "#ffffff",
                    borderBottomColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                    borderRightColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                    boxShadow: theme === "dark" 
                      ? "inset -1px -1px 0px #1a1a1a, inset 1px 1px 0px #4a4a4a"
                      : "inset -1px -1px 0px #c0c0c0, inset 1px 1px 0px #ffffff",
                    imageRendering: "pixelated"
                  }}
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className={`w-full ${theme === "dark" ? "bg-[#2a2a2a] text-white placeholder-gray-400" : "bg-[#f5f5f5] text-gray-900 placeholder-gray-500"} px-3 sm:px-4 py-2 sm:py-3 outline-none transition-colors`}
                  style={{
                    border: `2px solid ${theme === "dark" ? "#1a1a1a" : "#d0d0d0"}`,
                    borderTopColor: theme === "dark" ? "#4a4a4a" : "#ffffff",
                    borderLeftColor: theme === "dark" ? "#4a4a4a" : "#ffffff",
                    borderBottomColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                    borderRightColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                    boxShadow: theme === "dark" 
                      ? "inset -1px -1px 0px #1a1a1a, inset 1px 1px 0px #4a4a4a"
                      : "inset -1px -1px 0px #c0c0c0, inset 1px 1px 0px #ffffff",
                    imageRendering: "pixelated"
                  }}
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {t.contact.form.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className={`w-full ${theme === "dark" ? "bg-[#2a2a2a] text-white placeholder-gray-400" : "bg-[#f5f5f5] text-gray-900 placeholder-gray-500"} px-3 sm:px-4 py-2 sm:py-3 outline-none transition-colors resize-none`}
                  style={{
                    border: `2px solid ${theme === "dark" ? "#1a1a1a" : "#d0d0d0"}`,
                    borderTopColor: theme === "dark" ? "#4a4a4a" : "#ffffff",
                    borderLeftColor: theme === "dark" ? "#4a4a4a" : "#ffffff",
                    borderBottomColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                    borderRightColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                    boxShadow: theme === "dark" 
                      ? "inset -1px -1px 0px #1a1a1a, inset 1px 1px 0px #4a4a4a"
                      : "inset -1px -1px 0px #c0c0c0, inset 1px 1px 0px #ffffff",
                    imageRendering: "pixelated"
                  }}
                />
              </div>

              <button
                type="submit"
                className={`btn-game w-full px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-xs ${theme === "dark" ? "bg-[#166534] text-[#86efac] btn-game-green-dark" : "bg-[#bbf7d0] text-[#166534] btn-game-green-light"}`}
                style={{ imageRendering: "pixelated", textShadow: "1px 1px 0 rgba(0,0,0,0.3)" }}
              >
                {t.contact.form.submit}
              </button>
              {t.contact.form.formNote && (
                <p className={`text-xs sm:text-sm mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {t.contact.form.formNote}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

