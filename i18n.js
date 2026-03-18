module.exports = {
  langCookie: 'lang',
  locales: ['en', 'es', 'fr', 'pt'],
  defaultLocale: 'en',
  defaultNS: 'common',
  pages: {
    '*': ['common'],
  },
  localeDetection: false,
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
}
