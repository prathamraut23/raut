export const i18n = {
  defaultLocale: 'mr',
  locales: ['en', 'mr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
