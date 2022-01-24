import Head from 'next/head'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          <FormattedMessage id="hello_world" />
        </title>
      </Head>
      <h1>
        <FormattedMessage id="hello_world" />
      </h1>
      <ul>
        <li>
          <Link href="/" locale="ja">
            <a>
              <FormattedMessage id="locale.ja" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" locale="en">
            <a>
              <FormattedMessage id="locale.en" />
            </a>
          </Link>
        </li>
      </ul>
    </>

  )
}
