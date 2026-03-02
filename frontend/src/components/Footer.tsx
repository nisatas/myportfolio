import { useApp } from "../context/AppContext";

export default function Footer() {
  const { theme } = useApp();

  return (
    <footer
      className={`relative py-4 sm:py-6 ${theme === "dark" ? "bg-black/80 text-gray-300" : "bg-gray-100 text-gray-700"} border-t ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p
          className={`text-sm sm:text-base font-semibold tracking-wide ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          style={{ textShadow: theme === "dark" ? "0 0 20px rgba(6, 182, 212, 0.3)" : "0 1px 2px rgba(0,0,0,0.05)" }}
        >
          ©2026 NİSA ATAŞ
        </p>
      </div>
    </footer>
  );
}
