// Simple i18n configuration without next-intl dependency
const locales = ['en', 'mn'];

export function getMessages(locale: string) {
  if (!locales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  
  // Dynamic import of messages
  return import(`./messages/${locale}.json`).then(module => module.default);
}

export { locales };
