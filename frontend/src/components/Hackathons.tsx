import { useApp } from "../context/AppContext";
import { content } from "../data/content";
import PixelIcon from "./PixelIcon";

export default function Hackathons() {
  const { lang, theme } = useApp();
  const t = content[lang];

  if (!t.hackathons || !t.hackathons.items || t.hackathons.items.length === 0) {
    return null;
  }
  const labelWhatWeDid = t.hackathons.labelWhatWeDid ?? (lang === "tr" ? "Neler yaptık?" : "What we did");
  const labelProjectLinks = t.hackathons.labelProjectLinks ?? (lang === "tr" ? "Proje linkleri" : "Project links");

  return (
    <section
      id="hackathons"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className={`section-minecraft-overlay ${theme === "dark" ? "section-minecraft-overlay-dark" : "section-minecraft-overlay-light"}`} />

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
            {t.hackathons.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {t.hackathons.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`card-minecraft p-4 sm:p-6 relative ${theme === "dark" ? "card-minecraft-dark" : "card-minecraft-light"}`}
              >
                {/* Hackathon ismi */}
                <div className="flex items-center gap-2 mb-2">
                  <img src="/hackathon.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                    {item.name}
                  </h3>
                </div>
                <p className={`text-sm mb-1 ${theme === "dark" ? "text-[#fbbf24]" : "text-[#d97706]"}`}>{item.period}</p>
                {item.organizer && <p className={`text-sm mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>📍 {item.organizer}</p>}

                {/* Neler yaptık? */}
                {item.description && (
                  <div className="mb-3 sm:mb-4">
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${theme === "dark" ? "text-amber-400/90" : "text-amber-600"}`}>{labelWhatWeDid}</p>
                    <p className={`opacity-90 leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{item.description}</p>
                  </div>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.technologies.map((tech: string, i: number) => (
                      <span key={i} className={`text-xs px-2 py-0.5 rounded ${theme === "dark" ? "bg-white/10 text-gray-200" : "bg-gray-200/80 text-gray-700"}`}>{tech}</span>
                    ))}
                  </div>
                )}

                {/* Proje linkleri */}
                {(item.projectName || item.projectUrl || item.demoUrl) && (
                  <div className={`mt-3 pt-3 border-t ${theme === "dark" ? "border-white/10" : "border-gray-300/50"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${theme === "dark" ? "text-amber-400/90" : "text-amber-600"}`}>{labelProjectLinks}</p>
                    <div className="flex flex-wrap gap-3">
                      {item.projectUrl && (
                        <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium underline ${theme === "dark" ? "text-amber-400 hover:text-amber-300" : "text-amber-600 hover:text-amber-700"}`}>
                          <PixelIcon name="folder" className="w-4 h-4 inline-block mr-1 align-middle" dark={theme === "dark"} /> {item.projectName || "GitHub"}
                        </a>
                      )}
                      {item.demoUrl && (
                        <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium underline ${theme === "dark" ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"}`}>
                          <PixelIcon name="link" className="w-4 h-4 inline-block mr-1 align-middle" dark={theme === "dark"} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
