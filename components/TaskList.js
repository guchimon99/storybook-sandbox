import classNames from "classnames"
import Task from "./Task"

import * as s from './TaskList.module.scss'

export default function TaskList ({ tasks, onArchive, onPin }) {
  return (
    <ul className={classNames(s.taskList)}>
      {tasks.map(task =>
        <Task
          key={task.id} task={task}
          onArchive={() => onArchive(task)}
          onPin={() => onPin(task)} />
      )}
    </ul>
  )
}
