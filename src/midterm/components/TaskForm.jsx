import {useState} from 'react'
import Field from './Field'

const emptyTask = {title: '', hours: '', dueDate: ''}

const toFormValues = (task) => {
  return {
    title: task.title || '',
    hours: typeof task.hours === 'number' ? String(task.hours) : '',
    dueDate: task.dueDate || '',
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.title.trim()) {
    errors.title = 'Give the task a name.'
  }
  if (values.hours === '') {
    errors.hours = 'Add how many hours it will take.'
  } else if (Number(values.hours) <= 0) {
    errors.hours = 'Hours must be more than 0.'
  }
  if (!values.dueDate) {
    errors.dueDate = 'Pick the day it is due.'
  }
  return errors
}

const TaskForm = (props) => {
  const {task = emptyTask, submitLabel, onSubmit, onCancel, autoFocusField} = props
  const [values, setValues] = useState(toFormValues(task))
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const errors = validate(values)

  const handleChange = (event) => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
  }

  const handleBlur = (event) => {
    setTouched({...touched, [event.target.name]: true})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setTouched({title: true, hours: true, dueDate: true})
    if (Object.keys(errors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)
    try {
      await onSubmit({
        title: values.title.trim(),
        hours: Number(values.hours),
        dueDate: values.dueDate,
      })
    } catch (err) {
      console.error(err)
      setSubmitError('Could not save. Is `npm run server` running?')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field
        label="Task title"
        name="title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="e.g. Finish lab report"
        error={touched.title && errors.title}
        autoFocus={autoFocusField === 'title'}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Hours it will take"
          name="hours"
          type="number"
          inputMode="decimal"
          min="0"
          step="0.5"
          value={values.hours}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. 1.5"
          error={touched.hours && errors.hours}
          autoFocus={autoFocusField === 'hours'}
        />
        <Field
          label="Due date"
          name="dueDate"
          type="date"
          value={values.dueDate}
          onChange={handleChange}
          onBlur={handleBlur}
          hint="We show it a day early, so you finish with room to spare."
          error={touched.dueDate && errors.dueDate}
          autoFocus={autoFocusField === 'dueDate'}
        />
      </div>

      {submitError && (
        <p role="alert" className="rounded-xl bg-rust/10 px-4 py-3 text-sm text-rust">
          {submitError}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-2xl border-2 border-wine py-3 font-bold text-wine transition duration-200 hover:bg-wine/10 active:scale-[0.98]"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer rounded-2xl bg-wine py-3 font-bold text-cream shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-wine-dark hover:shadow-md active:translate-y-0 disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? 'Saving...' : submitLabel}
        </button>
      </div>
    </form>
  )
}

export default TaskForm
