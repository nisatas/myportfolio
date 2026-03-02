import { useState } from "react";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";
import PixelIcon from "./PixelIcon";

function CaseStudyModal({
  project,
  labels,
  theme,
  lang,
  onClose,
}: {
  project: any;
  labels: any;
  theme: string;
  lang: string;
  onClose: () => void;
}) {
  const cs = project?.caseStudy || {};
  const hasContent = [
    cs.problem,
    cs.solution,
    cs.architecture,
    cs.challenges,
    cs.learned,
  ].some((v) => (v || "").trim());
  const emptyMessage = lang === "en" ? "Case study content not added yet." : "Case Study içeriği henüz eklenmedi.";
  const sections = [
    { key: "problem", label: labels?.problem ?? "Problem" },
    { key: "solution", label: labels?.solution ?? "Solution" },
    { key: "architecture", label: labels?.architecture ?? "Architecture" },
    { key: "challenges", label: labels?.challenges ?? "Challenges" },
    { key: "learned", label: labels?.learned ?? "What I Learned" },
  ].filter((s) => (cs[s.key as keyof typeof cs] || "").trim());

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg shadow-2xl ${
          theme === "dark" ? "bg-[#1a1a2e] text-gray-100" : "bg-white text-gray-900"
        }`}
        style={{
          border: `3px solid ${theme === "dark" ? "#3b82f6" : "#2563eb"}`,
          boxShadow: theme === "dark" ? "0 0 30px rgba(59, 130, 246, 0.3)" : "0 0 30px rgba(37, 99, 235, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-600/50 bg-inherit">
          <h3 className="text-xl font-bold">{project?.name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded hover:bg-white/10 transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-6 space-y-6">
          {!hasContent && (
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
              {emptyMessage}
            </p>
          )}
          {sections.map(({ key, label }) => (
            <div key={key}>
              <h4
                className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                  theme === "dark" ? "text-amber-400" : "text-amber-600"
                }`}
              >
                {label}
              </h4>
              <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {cs[key as keyof typeof cs]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang, theme } = useApp();
  const t = content[lang];
  const [caseStudyIndex, setCaseStudyIndex] = useState<number | null>(null);

  if (!t.projects || !t.projects.items || t.projects.items.length === 0) {
    return null;
  }

  const labels = t.projects.labels;
  const showCount = t.projects.showCount ?? 4;
  const displayedItems = t.projects.items.slice(0, showCount);
  const hasMoreProjects = t.projects.items.length > showCount;
  const moreProjectsUrl = t.projects.moreProjectsUrl ?? "https://github.com/nisatas?tab=repositories";
  const moreProjectsLabel = t.projects.moreProjectsLabel ?? (lang === "en" ? "More Projects" : "Daha Fazla Proje");

  return (
    <section
      id="projects"
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
            {t.projects.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayedItems.map((project: any, index: number) => (
              <div
                key={index}
                className={`card-minecraft p-4 sm:p-6 relative ${theme === "dark" ? "card-minecraft-dark" : "card-minecraft-light"}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <PixelIcon name="monitor" className="w-7 h-7 sm:w-8 sm:h-8" dark={theme === "dark"} />
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                    {project.name}
                  </h3>
                </div>
                
                <p className={`text-sm sm:text-base mb-3 leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                  {project.description}
                </p>

                {project.impact && project.impact.trim() && (
                  <div className={`mb-3 px-3 py-2 rounded border-l-4 ${theme === "dark" ? "bg-amber-900/20 border-amber-500 text-amber-100" : "bg-amber-50 border-amber-600 text-amber-900"}`}>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-90">{labels?.impact ?? "Etki & Sonuç"}</span>
                    <p className="text-sm mt-0.5">{project.impact}</p>
                  </div>
                )}

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, techIndex: number) => (
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

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.caseStudy && (
                    <button
                      type="button"
                      onClick={() => setCaseStudyIndex(index)}
                      className={`px-3 sm:px-4 py-2 text-center font-semibold text-sm sm:text-base relative ${theme === "dark" ? "bg-[#1e3a5f] text-[#93c5fd]" : "bg-[#dbeafe] text-[#1e40af]"}`}
                      style={{
                        border: `2px solid ${theme === "dark" ? "#3b82f6" : "#2563eb"}`,
                        boxShadow: theme === "dark" ? "0 0 8px rgba(59, 130, 246, 0.2)" : "0 0 8px rgba(37, 99, 235, 0.15)",
                        imageRendering: "pixelated",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        transition: "all 0.2s",
                      }}
                    >
                      {labels?.caseStudy ?? "Case Study"}
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${theme === "dark" ? "bg-[#166534] text-[#86efac]" : "bg-[#dcfce7] text-[#166534]"} px-3 sm:px-4 py-2 text-center font-semibold text-sm sm:text-base relative`}
                      style={{
                        border: `2px solid ${theme === "dark" ? "#14532d" : "#bbf7d0"}`,
                        borderTopColor: theme === "dark" ? "#22c55e" : "#4ade80",
                        borderLeftColor: theme === "dark" ? "#22c55e" : "#4ade80",
                        borderBottomColor: theme === "dark" ? "#14532d" : "#86efac",
                        borderRightColor: theme === "dark" ? "#14532d" : "#86efac",
                        boxShadow: theme === "dark"
                          ? "inset -1px -1px 0px #14532d, inset 1px 1px 0px #22c55e, 0 2px 4px rgba(0,0,0,0.3)"
                          : "inset -1px -1px 0px #86efac, inset 1px 1px 0px #4ade80, 0 2px 4px rgba(0,0,0,0.1)",
                        imageRendering: "pixelated",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = theme === "dark"
                          ? "inset -1px -1px 0px #14532d, inset 1px 1px 0px #22c55e, 0 2px 4px rgba(0,0,0,0.3), 0 0 15px rgba(34, 197, 94, 0.4)"
                          : "inset -1px -1px 0px #86efac, inset 1px 1px 0px #4ade80, 0 2px 4px rgba(0,0,0,0.1), 0 0 15px rgba(34, 197, 94, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = theme === "dark"
                          ? "inset -1px -1px 0px #14532d, inset 1px 1px 0px #22c55e, 0 2px 4px rgba(0,0,0,0.3)"
                          : "inset -1px -1px 0px #86efac, inset 1px 1px 0px #4ade80, 0 2px 4px rgba(0,0,0,0.1)";
                      }}
                    >
                      <PixelIcon name="folder" className="w-4 h-4 inline-block mr-1 align-middle" dark={theme === "dark"} /> GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${theme === "dark" ? "bg-[#7c2d12] text-[#fca5a5]" : "bg-[#fee2e2] text-[#991b1b]"} px-3 sm:px-4 py-2 text-center font-semibold text-sm sm:text-base relative`}
                      style={{
                        border: `2px solid ${theme === "dark" ? "#7f1d1d" : "#fecaca"}`,
                        borderTopColor: theme === "dark" ? "#ef4444" : "#f87171",
                        borderLeftColor: theme === "dark" ? "#ef4444" : "#f87171",
                        borderBottomColor: theme === "dark" ? "#7f1d1d" : "#fca5a5",
                        borderRightColor: theme === "dark" ? "#7f1d1d" : "#fca5a5",
                        boxShadow: theme === "dark"
                          ? "inset -1px -1px 0px #7f1d1d, inset 1px 1px 0px #ef4444, 0 2px 4px rgba(0,0,0,0.3)"
                          : "inset -1px -1px 0px #fca5a5, inset 1px 1px 0px #f87171, 0 2px 4px rgba(0,0,0,0.1)",
                        imageRendering: "pixelated",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        transition: "all 0.2s"
                      }}
                    >
                      <PixelIcon name="link" className="w-4 h-4 inline-block mr-1 align-middle" dark={theme === "dark"} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}

            {hasMoreProjects && (
              <div className="flex items-center justify-center md:col-span-2 lg:col-span-3">
                <a
                  href={moreProjectsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 font-semibold ${theme === "dark" ? "bg-[#1e3a5f] text-[#93c5fd]" : "bg-[#dbeafe] text-[#1e40af]"}`}
                  style={{
                    border: `2px solid ${theme === "dark" ? "#3b82f6" : "#2563eb"}`,
                    boxShadow: theme === "dark" ? "0 0 12px rgba(59, 130, 246, 0.25)" : "0 0 12px rgba(37, 99, 235, 0.2)",
                    imageRendering: "pixelated",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    transition: "all 0.2s",
                  }}
                >
                  <PixelIcon name="folder" className="w-5 h-5" dark={theme === "dark"} />
                  {moreProjectsLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {caseStudyIndex !== null && displayedItems[caseStudyIndex] && (
        <CaseStudyModal
          project={displayedItems[caseStudyIndex]}
          labels={labels}
          theme={theme}
          lang={lang}
          onClose={() => setCaseStudyIndex(null)}
        />
      )}
    </section>
  );
}

