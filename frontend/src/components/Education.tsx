import { useApp } from "../context/AppContext";
import { content } from "../data/content";
import PixelIcon from "./PixelIcon";

export default function Education() {
  const { lang, theme } = useApp();
  const t = content[lang];

  return (
    <section
      id="education"
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
                ? "2px 2px 0px #1a1a1a, 0 0 10px rgba(6, 182, 212, 0.5)"
                : "2px 2px 0px #d0d0d0, 0 0 10px rgba(6, 182, 212, 0.3)"
            }}
          >
            {t.education.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {t.education.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`card-minecraft p-4 sm:p-6 relative ${theme === "dark" ? "card-minecraft-dark" : "card-minecraft-light"}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <PixelIcon name="book" className="w-7 h-7 sm:w-8 sm:h-8" dark={theme === "dark"} />
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>{item.school}</h3>
                </div>
                <p className={`text-base sm:text-lg mb-2 font-semibold ${theme === "dark" ? "text-[#8b5cf6]" : "text-[#7c3aed]"}`} style={{ textShadow: theme === "dark" ? "0 0 8px rgba(139, 92, 246, 0.5)" : "0 0 5px rgba(124, 58, 237, 0.3)" }}>{item.degree}</p>
                <p className={`text-sm mb-3 sm:mb-4 ${theme === "dark" ? "text-[#06b6d4]" : "text-[#0891b2]"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>{item.period}</p>
                {item.description && (
                  <p className={`mt-3 sm:mt-4 opacity-80 leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

