import {useEffect, useState} from 'react'
import Header from '../components/Header'
import TaskCreate from '../components/TaskCreate'
import TaskList from '../components/TaskList'
import EmptyState from '../components/EmptyState'
import FilterEmpty from '../components/FilterEmpty'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import useTasksContext from '../hooks/use-tasks-context'
import {sortTasks, matchesFilter} from '../utils/tasks'

const headings = {
  all: 'Your tasks',
  short: 'Short tasks',
  long: 'Long tasks',
}

const TasksPage = () => {
  const {tasks, isLoading, error, fetchTasks} = useTasksContext()
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const openForm = () => {
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  const clearFilter = () => {
    setFilter('all')
  }

  const visibleTasks = sortTasks(tasks).filter((task) => matchesFilter(task, filter))
  const allDone = tasks.length > 0 && tasks.every((task) => task.done)

  const taskList =
    visibleTasks.length > 0 ? (
      <TaskList tasks={visibleTasks} />
    ) : (
      <FilterEmpty filter={filter} onClear={clearFilter} />
    )

  let content
  if (showForm) {
    content = <TaskCreate onClose={closeForm} />
  } else if (isLoading) {
    content = <Loading message="Loading your tasks..." />
  } else if (error) {
    content = <ErrorMessage message={error} onRetry={fetchTasks} />
  } else if (tasks.length === 0) {
    content = (
      <EmptyState
        title="It’s empty here"
        message="Tap + to add your first task."
        onAdd={openForm}
      />
    )
  } else if (allDone) {
    content = (
      <>
        <EmptyState
          showCheck
          title="All caught up"
          message="Every task is done. Add another anytime."
          onAdd={openForm}
        />
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted">Finished</h2>
        {taskList}
      </>
    )
  } else {
    content = (
      <>
        <div className="flex items-end justify-between gap-4">
          <h2 key={filter} className="animate-rise font-display text-4xl text-wine sm:text-5xl">
            {headings[filter]}
          </h2>
          {filter !== 'all' && (
            <button
              type="button"
              onClick={clearFilter}
              className="mb-1 shrink-0 cursor-pointer rounded-full border border-wine/30 px-4 py-1.5 text-sm font-medium text-wine transition duration-200 hover:border-wine hover:bg-wine hover:text-cream active:scale-95"
            >
              Show all
            </button>
          )}
        </div>
        {taskList}
        <AddButton floating onClick={openForm} />
      </>
    )
  }

  return (
    <div className="min-h-screen">
      <Header filter={filter} onFilterChange={setFilter} />
      <main className="mx-auto max-w-2xl px-5 pb-36 pt-8 sm:px-8 sm:pt-12">{content}</main>
    </div>
  )
}

export default TasksPage
