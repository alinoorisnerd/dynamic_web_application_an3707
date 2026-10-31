import axios from 'axios'

const BASE = 'http://localhost:3001'

export const fetchProfile = async () => {
  const response = await axios.get(`${BASE}/profile`)
  return response.data
}

export const saveProfile = async (name) => {
  const response = await axios.put(`${BASE}/profile`, {name})
  return response.data
}

export const fetchTasks = async () => {
  const response = await axios.get(`${BASE}/tasks`)
  return response.data
}

export const createTask = async (task) => {
  const response = await axios.post(`${BASE}/tasks`, {...task, done: false})
  return response.data
}

export const updateTask = async (task) => {
  const response = await axios.put(`${BASE}/tasks/${task.id}`, task)
  return response.data
}

export const toggleTask = async (id, done) => {
  const response = await axios.patch(`${BASE}/tasks/${id}`, {done})
  return response.data
}

export const deleteTask = async (id) => {
  await axios.delete(`${BASE}/tasks/${id}`)
}
