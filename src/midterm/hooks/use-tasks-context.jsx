import {useContext} from 'react'
import TasksContext from '../context/tasks'

const useTasksContext = () => {
  return useContext(TasksContext)
}

export default useTasksContext
