import { useApp } from "../context/AppContext";
import { content } from "../data/content";

export default function Experience() {
  const { lang, theme } = useApp();
  const t = content[lang];

  return (
    <section
      id="experience"
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
                ? "2px 2px 0px #1a1a1a, 0 0 10px rgba(236, 72, 153, 0.5)"
                : "2px 2px 0px #d0d0d0, 0 0 10px rgba(236, 72, 153, 0.3)"
            }}
          >
            {t.experience.title}
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            {t.experience.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`card-minecraft p-4 sm:p-6 relative ${theme === "dark" ? "card-minecraft-dark" : "card-minecraft-light"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src="/job.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>{item.position}</h3>
                </div>
                <p className={`text-base sm:text-lg mb-2 font-semibold ${theme === "dark" ? "text-[#ec4899]" : "text-[#db2777]"}`} style={{ textShadow: theme === "dark" ? "0 0 8px rgba(236, 72, 153, 0.5)" : "0 0 5px rgba(219, 39, 119, 0.3)" }}>🏢 {item.company}</p>
                <p className={`text-sm mb-3 sm:mb-4 ${theme === "dark" ? "text-[#06b6d4]" : "text-[#0891b2]"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>{item.period}</p>
                {item.description && (
                  <p className={`opacity-80 mb-3 sm:mb-4 leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{item.description}</p>
                )}
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                    {item.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold ${theme === "dark" ? "bg-[#1e3a5f] text-[#60a5fa]" : "bg-[#dbeafe] text-[#1e40af]"} relative`}
                        style={{
                          border: `2px solid ${theme === "dark" ? "#3b82f6" : "#2563eb"}`,
                          borderTopColor: theme === "dark" ? "#60a5fa" : "#3b82f6",
                          borderLeftColor: theme === "dark" ? "#60a5fa" : "#3b82f6",
                          borderBottomColor: theme === "dark" ? "#1e40af" : "#1e3a8a",
                          borderRightColor: theme === "dark" ? "#1e40af" : "#1e3a8a",
                          boxShadow: theme === "dark" 
                            ? "inset -1px -1px 0px #1e40af, inset 1px 1px 0px #60a5fa, 0 0 8px rgba(96, 165, 250, 0.3)"
                            : "inset -1px -1px 0px #1e3a8a, inset 1px 1px 0px #3b82f6, 0 0 8px rgba(59, 130, 246, 0.2)",
                          imageRendering: "pixelated",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
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

