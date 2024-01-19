const defaultLocale = 'en';
const langs = [defaultLocale,'pt','fr','ar'] as const;

const locales = langs as unknown as string[];
export const i18n = {defaultLocale,locales,localeDetection:true}

export type Locale = (typeof langs)[number];