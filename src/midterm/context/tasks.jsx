import {createContext, useReducer, useCallback} from 'react'
import {
  fetchTasks as fetchTasksRequest,
  createTask as createTaskRequest,
  updateTask as updateTaskRequest,
  toggleTask as toggleTaskRequest,
  deleteTask as deleteTaskRequest,
} from '../api'
import {
  tasksReducer,
  initialState,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_TASK,
  REPLACE_TASK,
  REMOVE_TASK,
} from '../reducers/tasks'

const TasksContext = createContext()

const TasksProvider = (props) => {
  const {children} = props
  const [state, dispatch] = useReducer(tasksReducer, initialState)

  const fetchTasks = useCallback(async () => {
    dispatch({type: FETCH_START})
    try {
      const tasks = await fetchTasksRequest()
      dispatch({type: FETCH_SUCCESS, payload: tasks})
    } catch (err) {
      console.error(err)
      dispatch({
        type: FETCH_ERROR,
        payload: 'Could not load your tasks. Is `npm run server` running?',
      })
    }
  }, [])

  const createTask = async (task) => {
    const newTask = await createTaskRequest(task)
    dispatch({type: ADD_TASK, payload: newTask})
  }

  const editTaskById = async (id, changes) => {
    const task = state.tasks.find((task) => task.id === id)
    const updated = await updateTaskRequest({...task, ...changes})
    dispatch({type: REPLACE_TASK, payload: updated})
  }

  const toggleTaskById = async (id, done) => {
    const updated = await toggleTaskRequest(id, done)
    dispatch({type: REPLACE_TASK, payload: updated})
  }

  const deleteTaskById = async (id) => {
    await deleteTaskRequest(id)
    dispatch({type: REMOVE_TASK, payload: id})
  }

  const valuesToShare = {
    tasks: state.tasks,
    isLoading: state.isLoading,
    error: state.error,
    fetchTasks,
    createTask,
    editTaskById,
    toggleTaskById,
    deleteTaskById,
  }

  return (
    <TasksContext.Provider value={valuesToShare}>
      {children}
    </TasksContext.Provider>
  )
}

export {TasksProvider}
export default TasksContext
