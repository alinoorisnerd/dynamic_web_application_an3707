import {useState} from 'react'
import TaskForm from './TaskForm'
import {CheckIcon, TrashIcon} from './Icons'
import useTasksContext from '../hooks/use-tasks-context'
import {formatHours, formatDue} from '../utils/tasks'

const tapToEdit =
  'cursor-pointer rounded-md text-left decoration-wine/40 underline-offset-4 transition duration-200 hover:text-wine hover:underline'

const TaskItem = (props) => {
  const {task} = props
  const {editTaskById, toggleTaskById, deleteTaskById} = useTasksContext()
  const [editField, setEditField] = useState(null)
  const [actionError, setActionError] = useState(null)

  const handleSubmit = async (changes) => {
    await editTaskById(task.id, changes)
    setEditField(null)
  }

  const handleCancel = () => {
    setEditField(null)
  }

  const handleToggle = async () => {
    setActionError(null)
    try {
      await toggleTaskById(task.id, !task.done)
    } catch (err) {
      console.error(err)
      setActionError('Could not update this task. Is `npm run server` running?')
    }
  }

  const handleDelete = async () => {
    setActionError(null)
    try {
      await deleteTaskById(task.id)
    } catch (err) {
      console.error(err)
      setActionError('Could not delete this task. Is `npm run server` running?')
    }
  }

  if (editField) {
    return (
      <li className="animate-rise rounded-3xl bg-sand p-5 ring-2 ring-wine/20 sm:p-6">
        <TaskForm
          task={task}
          submitLabel="Save"
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          autoFocusField={editField}
        />
      </li>
    )
  }

  return (
    <li className="animate-rise rounded-3xl bg-sand px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-wine/10 sm:px-6">
      <div className="flex items-center gap-4">
        <label className="relative grid shrink-0 place-items-center">
          <input
            type="checkbox"
            checked={Boolean(task.done)}
            onChange={handleToggle}
            aria-label={`Mark "${task.title}" as done`}
            className="peer h-7 w-7 cursor-pointer appearance-none rounded-lg border-2 border-wine transition duration-200 checked:bg-wine hover:scale-110 hover:bg-wine/10 checked:hover:bg-wine-dark"
          />
          <CheckIcon className="pointer-events-none absolute h-4 w-4 text-cream opacity-0 transition duration-200 peer-checked:opacity-100" />
        </label>

        <div className="min-w-0 flex-1">
          <button
            type="button"
            onClick={() => setEditField('title')}
            className={`block max-w-full break-words text-lg ${tapToEdit} ${task.done ? 'text-muted line-through' : ''}`}
          >
            {task.title}
          </button>
          <p className="mt-0.5 text-muted">
            <button type="button" onClick={() => setEditField('hours')} className={tapToEdit}>
              {formatHours(task.hours)}
            </button>
            <span aria-hidden="true"> · </span>
            <button type="button" onClick={() => setEditField('dueDate')} className={tapToEdit}>
              {formatDue(task.dueDate)}
            </button>
          </p>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          aria-label={`Delete "${task.title}"`}
          className="shrink-0 cursor-pointer rounded-xl p-2 text-wine transition duration-200 hover:scale-110 hover:bg-wine/10 hover:text-rust active:scale-95"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>

      {actionError && (
        <p role="alert" className="mt-2 text-sm text-rust">
          {actionError}
        </p>
      )}
    </li>
  )
}

export default TaskItem
