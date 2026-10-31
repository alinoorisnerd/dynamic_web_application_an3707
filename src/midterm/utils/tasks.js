export const formatHours = (hours) => {
  if (typeof hours !== 'number') {
    return 'No estimate'
  }
  return `${hours} ${hours > 1 ? 'hrs' : 'hr'}`
}

export const parkDate = (dueDate) => {
  const [year, month, day] = dueDate.split('-').map(Number)
  return new Date(year, month - 1, day - 1)
}

export const formatDue = (dueDate) => {
  if (!dueDate) {
    return 'No due date'
  }
  const label = parkDate(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
  return `Due ${label}`
}

export const isShort = (task) => {
  return typeof task.hours === 'number' && task.hours <= 1
}

export const isLong = (task) => {
  return typeof task.hours === 'number' && task.hours > 1
}

export const matchesFilter = (task, filter) => {
  if (filter === 'short') {
    return isShort(task)
  }
  if (filter === 'long') {
    return isLong(task)
  }
  return true
}

export const sortTasks = (tasks) => {
  return [...tasks].sort((a, b) => {
    if (Boolean(a.done) !== Boolean(b.done)) {
      return a.done ? 1 : -1
    }
    return (a.dueDate || '9999-12-31').localeCompare(b.dueDate || '9999-12-31')
  })
}
