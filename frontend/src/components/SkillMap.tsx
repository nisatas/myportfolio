import { useState, useRef, useCallback, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";

const islandTypeStyles = {
  frontend: {
    dark: "bg-[#3d5a2e] border-[#2d4a1e] border-t-[#5a8c3a] border-l-[#5a8c3a] shadow-island-frontend",
    light: "bg-[#6b8e4e] border-[#4a6b35] border-t-[#8fbc6e] border-l-[#8fbc6e] shadow-island-frontend-light",
  },
  backend: {
    dark: "bg-[#4a4a4a] border-[#2a2a2a] border-t-[#6a6a6a] border-l-[#6a6a6a] shadow-island-backend",
    light: "bg-[#7a7a7a] border-[#5a5a5a] border-t-[#9a9a9a] border-l-[#9a9a9a] shadow-island-backend-light",
  },
  tool: {
    dark: "bg-[#5c4033] border-[#3d2a20] border-t-[#8b6914] border-l-[#8b6914] shadow-island-tool",
    light: "bg-[#8b6914] border-[#6b4f10] border-t-[#c49b2a] border-l-[#c49b2a] shadow-island-tool-light",
  },
  other: {
    dark: "bg-[#4a3d6b] border-[#2a2040] border-t-[#7b5cb5] border-l-[#7b5cb5] shadow-island-other",
    light: "bg-[#6b5b8a] border-[#4a3d60] border-t-[#9d7ed9] border-l-[#9d7ed9] shadow-island-other-light",
  },
};

const defaultPositions = [
  { left: 5, top: 15, delay: "0s" },
  { left: 25, top: 8, delay: "0.5s" },
  { left: 45, top: 20, delay: "0.2s" },
  { left: 70, top: 12, delay: "0.7s" },
  { left: 85, top: 22, delay: "0.3s" },
  { left: 12, top: 55, delay: "0.4s" },
  { left: 38, top: 58, delay: "0.15s" },
  { left: 55, top: 60, delay: "0.1s" },
  { left: 78, top: 52, delay: "0.6s" },
];

export default function SkillMap() {
  const { lang, theme } = useApp();
  const t = content[lang];
  const islands = t.skillMap?.islands ?? [];
  const [activeId, setActiveId] = useState<string | null>(null);
  const [positions, setPositions] = useState<Record<string, { left: number; top: number }>>({});
  const [dragging, setDragging] = useState<string | null>(null);
  const dragStart = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const didDragRef = useRef(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((i: number, id: string) => {
    if (positions[id]) return positions[id];
    const d = defaultPositions[i % defaultPositions.length];
    return { left: d.left, top: d.top };
  }, [positions]);

  const handlePointerDown = useCallback((e: React.MouseEvent | React.TouchEvent, id: string, i: number) => {
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const pos = getPosition(i, id);
    setDragging(id);
    dragStart.current = { x: clientX, y: clientY, left: pos.left, top: pos.top };
  }, [getPosition]);

  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragging || !mapRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    if ("touches" in e) e.preventDefault();
    didDragRef.current = true;
    const rect = mapRef.current.getBoundingClientRect();
    const dx = ((clientX - dragStart.current.x) / rect.width) * 100;
    const dy = ((clientY - dragStart.current.y) / rect.height) * 100;
    const left = Math.max(5, Math.min(95, dragStart.current.left + dx));
    const top = Math.max(5, Math.min(95, dragStart.current.top + dy));
    setPositions((prev) => ({ ...prev, [dragging]: { left, top } }));
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    const wasDragging = dragging;
    setDragging(null);
    if (!didDragRef.current && wasDragging) {
      setActiveId((prev) => (prev === wasDragging ? null : wasDragging));
    }
    setTimeout(() => { didDragRef.current = false; }, 0);
  }, [dragging]);

  useEffect(() => {
    if (!dragging) return;
    const opts = { passive: false } as AddEventListenerOptions;
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, opts);
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("touchcancel", handlePointerUp);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("touchcancel", handlePointerUp);
    };
  }, [dragging, handlePointerMove, handlePointerUp]);

  if (!t.skillMap || islands.length === 0) return null;

  return (
    <section
      id="skill-map"
      className="relative min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 section-minecraft-overlay section-minecraft-overlay-dark pointer-events-none" style={{ opacity: 0.4 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-cyan-900/15 to-blue-900/25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-center ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={{ textShadow: theme === "dark" ? "2px 2px 0 #1a1a1a" : "2px 2px 0 rgba(255,255,255,0.8)" }}>
          {t.skillMap.title}
        </h2>
        <p className={`text-sm sm:text-base mb-6 md:mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          {t.skillMap.subtitle}
        </p>

        {/* Tıklanınca açılan beceriler paneli — üstte, yüksek z-index, okunaklı */}
        {activeId && (
          <div
            className={`relative z-30 mb-6 rounded-lg border-2 p-4 sm:p-6 max-w-2xl mx-auto ${theme === "dark" ? "bg-[#1a1a1a] border-amber-700/60 text-amber-50" : "bg-white border-amber-400/60 text-gray-900"} shadow-xl`}
            style={{
              boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)" : "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg sm:text-xl font-bold ${theme === "dark" ? "text-amber-200" : "text-amber-800"}`}>
                {t.skillMap.skillsTitle}
              </h3>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className={`p-1.5 rounded ${theme === "dark" ? "hover:bg-amber-900/40 text-amber-200" : "hover:bg-amber-100 text-amber-800"}`}
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-sm sm:text-base">
              <p>
                <span className={`font-semibold ${theme === "dark" ? "text-amber-300" : "text-amber-700"}`}>{t.skillMap.frontend}:</span>{" "}
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>{t.skillMap.frontendList}</span>
              </p>
              <p>
                <span className={`font-semibold ${theme === "dark" ? "text-amber-300" : "text-amber-700"}`}>{t.skillMap.backend}:</span>{" "}
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>{t.skillMap.backendList}</span>
              </p>
              <p>
                <span className={`font-semibold ${theme === "dark" ? "text-amber-300" : "text-amber-700"}`}>{t.skillMap.other}:</span>{" "}
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>{t.skillMap.otherList}</span>
              </p>
            </div>
          </div>
        )}

        {/* Harita alanı: su + adalar — kenarlara çerçeve */}
        <div
          ref={mapRef}
          className={`relative rounded-lg overflow-visible min-h-[320px] sm:min-h-[380px] md:min-h-[420px] border-4 ${theme === "dark" ? "border-[#2a2a2a] border-t-[#5c5c5c] border-l-[#5c5c5c]" : "border-[#8a8a8a] border-t-[#e8e8e8] border-l-[#e8e8e8]"}`}
          style={{
            boxShadow: theme === "dark"
              ? "inset 2px 2px 0 rgba(92,92,92,0.3), inset -2px -2px 0 rgba(0,0,0,0.4)"
              : "inset 2px 2px 0 rgba(255,255,255,0.6), inset -2px -2px 0 rgba(0,0,0,0.15)",
          }}
        >
          {/* Su arka planı */}
          <div
            className={`absolute inset-0 rounded-[4px] overflow-hidden ${theme === "dark" ? "bg-[#1a3a5a]" : "bg-[#2e5a7a]"}`}
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "12px 12px",
            }}
          />

          {/* Adalar — yazıya göre boyut, sürüklenebilir */}
          {islands.map((island: { id: string; label: string; ability: string; type: keyof typeof islandTypeStyles; libraries?: string }, i: number) => {
            const pos = getPosition(i, island.id);
            const defaultDelay = defaultPositions[i % defaultPositions.length].delay;
            const typeStyles = islandTypeStyles[island.type] ?? islandTypeStyles.other;
            const style = theme === "dark" ? typeStyles.dark : typeStyles.light;
            const isDragging = dragging === island.id;
            return (
              <div
                key={island.id}
                className={`absolute rounded-sm border-2 ${style} flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group z-10 min-w-[5rem] min-h-[2.5rem] sm:min-w-[6rem] sm:min-h-[3rem] px-2 py-1.5 sm:px-3 sm:py-2 ${isDragging ? "pointer-events-none" : "island-float"}`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: defaultDelay,
                  touchAction: "none",
                }}
                title={`${island.label}: ${island.ability}`}
                onMouseDown={(e) => handlePointerDown(e, island.id, i)}
                onTouchStart={(e) => handlePointerDown(e, island.id, i)}
                onClick={() => {
                  if (didDragRef.current) return;
                  setActiveId(activeId === island.id ? null : island.id);
                }}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveId(activeId === island.id ? null : island.id)}
                role="button"
                tabIndex={0}
              >
                {/* Ada üzerindeki yazı + kütüphane alt başlığı */}
                <span
                  className={`font-pixel text-[8px] sm:text-[10px] text-center leading-tight px-1 py-0.5 rounded-sm whitespace-nowrap ${theme === "dark" ? "bg-black/70 text-amber-200" : "bg-black/60 text-white"} shadow-md`}
                >
                  {island.label}
                </span>
                {island.libraries && (
                  <span
                    className={`font-pixel text-[6px] sm:text-[8px] text-center leading-tight mt-0.5 px-1 rounded-sm whitespace-nowrap ${theme === "dark" ? "text-amber-300/90" : "text-amber-100"}`}
                  >
                    {island.libraries}
                  </span>
                )}
                {/* Hover (masaüstü): kısa tooltip — opak arka plan, okunaklı */}
                <div
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded border-2 shadow-xl transition-opacity pointer-events-none z-20 ${activeId === island.id ? "opacity-0" : "opacity-0 group-hover:opacity-100"} ${theme === "dark" ? "bg-[#0f0f0f] text-amber-100 border-amber-600/80" : "bg-white text-gray-900 border-amber-400/80"}`}
                  style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}
                >
                  <span className="font-semibold text-xs block">{island.label}</span>
                  {island.libraries && <span className={`block text-[10px] mt-0.5 ${theme === "dark" ? "text-amber-200/90" : "text-amber-700"}`}>{island.libraries}</span>}
                  <span className={`block text-[11px] mt-0.5 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{island.ability}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
