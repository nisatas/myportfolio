import { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import photo from "../assets/photo.jpg";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import PixelChatbot from "./PixelChatbot";

export default function Hero() {
  const { lang, theme } = useApp();
  const t = content[lang];
  const typedText = useTypewriter(t.hero.title);
  const [aboutBgOpacity, setAboutBgOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const fadeEnd = Math.min(window.innerHeight * 0.6, 500);
      const op = Math.max(0, 1 - y / fadeEnd);
      setAboutBgOpacity(op);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16 sm:pt-20"
    >
      {/* Hakkımda arka plan: aşağı kaydıkça silikleşir */}
      <div
        className="absolute inset-0 transition-opacity duration-150"
        style={{ opacity: aboutBgOpacity }}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed origin-center hero-bg-animate"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/50" : "bg-white/30"}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className={`${theme === "dark" ? "bg-black/50" : "bg-white/40"} backdrop-blur-md border ${theme === "dark" ? "border-cyan-400/40" : "border-cyan-600/60"} rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start`}>
          
          {/* Photo Frame */}
          <div className="order-1 md:order-1 flex justify-center md:justify-start mb-6 md:mb-0">
            <div 
              className={`${theme === "dark" ? "bg-[#3a3a3a]" : "bg-[#f0f0f0]"} p-4 relative`}
              style={{
                border: `4px solid ${theme === "dark" ? "#2a2a2a" : "#d8d8d8"}`,
                borderTopColor: theme === "dark" ? "#5a5a5a" : "#ffffff",
                borderLeftColor: theme === "dark" ? "#5a5a5a" : "#ffffff",
                borderBottomColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                borderRightColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                boxShadow: theme === "dark"
                  ? "inset -2px -2px 0px #1a1a1a, inset 2px 2px 0px #5a5a5a, 0 8px 16px rgba(0,0,0,0.4), 0 0 20px rgba(6, 182, 212, 0.3)"
                  : "inset -2px -2px 0px #c0c0c0, inset 2px 2px 0px #ffffff, 0 8px 16px rgba(0,0,0,0.2), 0 0 20px rgba(6, 182, 212, 0.2)",
                imageRendering: "pixelated"
              }}
            >
              <div 
                className={`${theme === "dark" ? "bg-[#2a2a2a]" : "bg-[#e0e0e0]"} w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center`}
                style={{
                  border: `3px solid ${theme === "dark" ? "#1a1a1a" : "#d0d0d0"}`,
                  borderTopColor: theme === "dark" ? "#4a4a4a" : "#f0f0f0",
                  borderLeftColor: theme === "dark" ? "#4a4a4a" : "#f0f0f0",
                  borderBottomColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                  borderRightColor: theme === "dark" ? "#1a1a1a" : "#c0c0c0",
                  boxShadow: theme === "dark"
                    ? "inset -1px -1px 0px #1a1a1a, inset 1px 1px 0px #4a4a4a"
                    : "inset -1px -1px 0px #c0c0c0, inset 1px 1px 0px #f0f0f0",
                  imageRendering: "pixelated"
                }}
              >
                <img 
                  src={photo} 
                  alt="Nisa Ataş" 
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-2 space-y-4">
            <div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {typedText}
                <span className="cursor">|</span>
              </h1>

              <p className={`mt-2 sm:mt-4 text-base sm:text-lg opacity-90 ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                {t.hero.subtitle}
              </p>
            </div>

            {t.hero.description && (
              <p className={`text-sm sm:text-base leading-relaxed opacity-85 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                {t.hero.description}
              </p>
            )}

            {t.hero.skills && (
              <div className="space-y-3 mt-4">
                <div>
                  <p className={`text-xs sm:text-sm font-semibold mb-2 ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                    Front-End: {t.hero.skills.frontend.join(", ")}
                  </p>
                </div>
                <div>
                  <p className={`text-xs sm:text-sm font-semibold mb-2 ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                    Back-End: {t.hero.skills.backend.join(", ")}
                  </p>
                </div>
                <div>
                  <p className={`text-xs sm:text-sm font-semibold ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                    Other: {t.hero.skills.other.join(", ")}
                  </p>
                </div>
              </div>
            )}

            {t.hero.cvLink && (
              <div className="mt-6">
                <a
                  href={t.hero.cvLink}
                  download
                  className={`btn-game inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-xs ${theme === "dark" ? "bg-[#2d4a2a] text-[#86efac] btn-game-green-dark" : "bg-[#bbf7d0] text-[#166534] btn-game-green-light"}`}
                  style={{ imageRendering: "pixelated" }}
                >
                  <span>📄</span>
                  {t.hero.cvButton}
                </a>
              </div>
            )}
          </div>

          {/* Chatbot */}
          <div className="order-3 md:order-3 md:col-span-2">
            <PixelChatbot />
          </div>
        </div>
      </div>
    </section>
  );
}
