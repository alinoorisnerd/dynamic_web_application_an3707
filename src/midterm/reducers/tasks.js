export const FETCH_START = 'fetch-start'
export const FETCH_SUCCESS = 'fetch-success'
export const FETCH_ERROR = 'fetch-error'
export const ADD_TASK = 'add-task'
export const REPLACE_TASK = 'replace-task'
export const REMOVE_TASK = 'remove-task'

export const initialState = {
  tasks: [],
  isLoading: true,
  error: null,
}

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return {...state, isLoading: true, error: null}
    case FETCH_SUCCESS:
      return {...state, isLoading: false, tasks: action.payload}
    case FETCH_ERROR:
      return {...state, isLoading: false, error: action.payload}
    case ADD_TASK:
      return {...state, tasks: [...state.tasks, action.payload]}
    case REPLACE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        }),
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    default:
      return state
  }
}
