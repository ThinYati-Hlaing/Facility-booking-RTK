const API_URL = window.location.hostname;

export const baseUrl = API_URL === "localhost" ? "import.meta.env.VITE_DEVELOPMENT_API-URL" : "import.meta.env.VITE_PRODUCTION_API-URL";