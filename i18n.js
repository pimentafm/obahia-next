module.exports = {
  "locales": ["en", "pt"],
  "defaultLocale": "en",
  "pages": {
    "*": ["common"],
    "/about": ["common"]
  },
  "loadLocaleFrom": (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
}
