import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import locales from '../contents/locales'

function App({ Component, pageProps }) {
  const { locale } = useRouter()
  const messages = locales[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default App
