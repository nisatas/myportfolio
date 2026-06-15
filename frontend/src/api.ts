const base = import.meta.env.VITE_API_URL ?? "";
export const apiBase = base.replace(/\/$/, "");
export const useBackend = Boolean(apiBase);
