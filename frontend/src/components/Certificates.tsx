import { useState } from "react";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";

const baseUrl = typeof import.meta.env.BASE_URL === "string" ? import.meta.env.BASE_URL : "/";

export default function Certificates() {
  const { lang, theme } = useApp();
  const t = content[lang];
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  if (!t.certificates || !t.certificates.items || t.certificates.items.length === 0) {
    return null;
  }

  return (
    <section
      id="certificates"
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
                ? "2px 2px 0px #1a1a1a, 0 0 10px rgba(251, 191, 36, 0.5)"
                : "2px 2px 0px #d0d0d0, 0 0 10px rgba(251, 191, 36, 0.3)"
            }}
          >
            {t.certificates.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {t.certificates.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`card-minecraft p-4 sm:p-6 relative ${theme === "dark" ? "card-minecraft-dark" : "card-minecraft-light"}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <img src="/certificate.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>{item.name}</h3>
                </div>
                <p className={`text-sm mb-3 sm:mb-4 ${theme === "dark" ? "text-[#fbbf24]" : "text-[#d97706]"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>{item.period}</p>
                {item.image && (
                  <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg border-2 border-yellow-500/30 bg-black/20">
                    {failedImages.has(index) ? (
                      <div className={`flex items-center justify-center min-h-[200px] rounded-lg ${theme === "dark" ? "bg-gray-800/50 text-gray-400" : "bg-gray-200/50 text-gray-500"}`}>
                        <span className="text-sm">Certificate image not found. Add to <code className="text-xs">frontend/public/</code></span>
                      </div>
                    ) : (
                      <img
                        src={item.image.startsWith("http") ? item.image : `${baseUrl}${item.image.replace(/^\//, "")}`}
                        alt={item.name}
                        className="w-full h-auto max-h-[50vh] sm:max-h-[360px] object-contain object-left-top rounded-lg"
                        style={{ imageRendering: "auto" }}
                        loading="lazy"
                        onError={() => setFailedImages((prev) => new Set(prev).add(index))}
                      />
                    )}
                  </div>
                )}
                {item.description && (
                  <p className={`mt-3 sm:mt-4 opacity-80 leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{item.description}</p>
                )}
                {item.pdf && (
                  <a
                    href={item.pdf.startsWith("http") ? item.pdf : `${baseUrl}${item.pdf.replace(/^\//, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 mt-3 text-sm font-semibold ${theme === "dark" ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"} underline decoration-cyan-500/50`}
                  >
                    <span>📄</span>
                    {lang === "tr" ? "Sertifikayı görüntüle (PDF)" : "View certificate (PDF)"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

