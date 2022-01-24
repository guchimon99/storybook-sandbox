import { useCallback, useState } from 'react'
import Head from 'next/head'
import { useIntl } from 'react-intl'

import TaskList from '../components/TaskList'
import Task from '../components/Task'
import Header from '../components/Header'

const DEFAULT_TASKS = [
    {
      id: 1,
      name: "Task 1",
      status: Task.STATUS.DEFAULT
    },
    {
      id: 2,
      name: "Task 2",
      status: Task.STATUS.DEFAULT
    },
    {
      id: 3,
      name: "Task 3",
      status: Task.STATUS.DEFAULT
    }
]

export default function Home() {
  const intl = useIntl()

  const [tasks, setTasks] = useState(DEFAULT_TASKS)

  const handleArchive = useCallback(archivedTask => {
    setTasks(tasks => {
      return tasks.map(task => {
        if(task.id!==archivedTask.id) return task
        return {
          ...task,
          status: task.status === Task.STATUS.ARCHIVED ? Task.STATUS.DEFAULT : Task.STATUS.ARCHIVED
        }
      })
    })
  }, [])

  const handlePin = useCallback(pinnedTask => {
    setTasks(tasks => {
      return tasks.map(task => {
        if(task.id !== pinnedTask.id) return task

        return {
          ...task,
          status: task.status === Task.STATUS.PINNED ? Task.STATUS.DEFAULT : Task.STATUS.PINNED
        }
      })
    })
  }, [])

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "hello_world" })}</title>
      </Head>
      <Header />
      <TaskList onArchive={handleArchive} onPin={handlePin} tasks={tasks} />
    </>
  )
}
