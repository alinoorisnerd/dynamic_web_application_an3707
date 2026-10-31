import TaskForm from './TaskForm'
import useTasksContext from '../hooks/use-tasks-context'

const TaskCreate = (props) => {
  const {onClose} = props
  const {createTask} = useTasksContext()

  const handleSubmit = async (task) => {
    await createTask(task)
    onClose()
  }

  return (
    <section className="animate-rise">
      <h2 className="font-display text-4xl text-wine sm:text-5xl">New task</h2>
      <div className="mt-6 rounded-3xl bg-sand p-6 sm:p-8">
        <TaskForm
          submitLabel="Add task"
          onSubmit={handleSubmit}
          onCancel={onClose}
          autoFocusField="title"
        />
      </div>
    </section>
  )
}

export default TaskCreate
