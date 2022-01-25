const locales = ['ja', 'en'];

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: require(`../src/contents/locales/${lang}.json`)
}), {});

const formats = {};

export const reactIntl = {
  defaultLocale: locales[0],
  locales,
  messages,
  formats,
};
