import { translations, defaultLang, type Lang } from './translations';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function getLangFromUrl(url: URL): Lang {
  const pathWithoutBase = url.pathname.replace(base, '');
  const [, lang] = pathWithoutBase.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: string): string {
  const dict = translations[lang] as Record<string, string>;
  return dict[key] || translations[defaultLang][key as keyof typeof translations['es']] || key;
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  if (lang === defaultLang) return `${base}/${path}`;
  return `${base}/${lang}/${path}`;
}
