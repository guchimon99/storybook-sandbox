import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

import * as s from './Header.module.scss'

export default function Header () {
  return (
    <div className={s.header}>
      <Link href="/" passHref>
        <a className={s.header__brand}>
          <FormattedMessage id="hello_world" />
        </a>
      </Link>
      <ul className={s.header__locale}>
        <li className={s.header__localeItem}>
          <Link passHref href="/" locale="ja">
            <a className={s.header__localeItemLink}>
              <FormattedMessage id="locale.ja" />
            </a>
          </Link>
        </li>
        <li className={s.header__localeItem}>
          <Link passHref href="/" locale="en">
            <a className={s.header__localeItemLink}>
              <FormattedMessage id="locale.en" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
