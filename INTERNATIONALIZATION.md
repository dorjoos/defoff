# Internationalization (i18n) Setup

This project now supports multiple languages using Next.js internationalization with next-intl.

## Supported Languages

- **English (en)** - Default language
- **Mongolian (mn)** - Secondary language

## How it works

1. **URL Structure**: The app uses locale-based routing:
   - English: `/en/` (default)
   - Mongolian: `/mn/`

2. **Language Switching**: Users can switch languages using the language switcher in the header (globe icon)

3. **Translation Files**: All text content is stored in JSON files:
   - `messages/en.json` - English translations
   - `messages/mn.json` - Mongolian translations

## Adding New Translations

To add new text content:

1. Add the key-value pair to both `messages/en.json` and `messages/mn.json`
2. Use the translation in components with `useTranslations('sectionName')`
3. Access specific keys with `t('keyName')`

## File Structure

```
app/
├── [locale]/           # Locale-based routing
│   ├── layout.tsx      # Locale-specific layout
│   └── page.tsx        # Main page
├── layout.tsx          # Root layout
└── page.tsx            # Redirects to /en

messages/
├── en.json             # English translations
└── mn.json             # Mongolian translations

middleware.ts           # Handles locale routing
i18n.ts                # i18n configuration
```

## Usage in Components

```tsx
import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('sectionName')
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
```
