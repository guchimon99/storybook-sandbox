import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import locales from '../contents/locales'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  const messages = locales[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
