export const LANGUAGES_CONFIG = [
  { code: "zh", label: "Chinese", native: "中文" },
  { code: "en", label: "English", native: "English" },
  { code: "ko", label: "Korean", native: "한국어" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "mn", label: "Mongolian", native: "Монгол" },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt" },
  { code: "ru", label: "Russian", native: "Русский" },
];

export const SUPPORTED_LANGUAGES = LANGUAGES_CONFIG.map((l) => l.code);
export const DEFAULT_LANGUAGE = "en";
export const SITE_URL = "http://k10hr.co.kr/";
