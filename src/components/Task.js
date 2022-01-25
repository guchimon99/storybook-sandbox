import classNames from "classnames"
import { FormattedMessage } from "react-intl"

import * as s from './Task.module.scss'

export default function Task({ task: { status, name }, onArchive, onPin }) {
  return (
    <li className={
      classNames(s.task)
    }>
      <div className={s.task__checkbox} onClick={onArchive}>
        {status === Task.STATUS.ARCHIVED ? ( "☑" ) : ( "□" )}
      </div>
      <div className={classNames(s.task__name)}>
        {name}
        {status && Task.STATUS.ARCHIVED && (
          <FormattedMessage id="task.status.archived" />
        )}
      </div>
      {status !== Task.STATUS.ARCHIVED && (
        <div className={s.task__star} onClick={onPin}>
          {status === Task.STATUS.DEFAULT ? "☆" : "★"}
        </div>
      )}
    </li>
  )
}

Task.STATUS = Object.freeze({
  DEFAULT: "DEFAULT",
  PINNED: "PINNED",
  ARCHIVED: "ARCHIVED"
})
