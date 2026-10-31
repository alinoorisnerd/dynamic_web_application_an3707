import TaskItem from './TaskItem'

const TaskList = (props) => {
  const {tasks} = props

  const renderedTasks = tasks.map((task) => {
    return <TaskItem key={task.id} task={task} />
  })

  return <ul className="mt-6 space-y-4">{renderedTasks}</ul>
}

export default TaskList
