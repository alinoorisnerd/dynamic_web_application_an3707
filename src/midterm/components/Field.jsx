import {useId} from 'react'

const Field = (props) => {
  const {label, error, hint, ...inputProps} = props
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className="block font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        aria-invalid={Boolean(error)}
        className={`mt-2 w-full rounded-xl border bg-cream px-4 py-3 text-ink outline-none transition duration-200 placeholder:text-muted/70 hover:border-wine/50 focus:border-wine focus:ring-4 focus:ring-wine/15 ${error ? 'border-rust' : 'border-line'}`}
      />
      {error ? (
        <p className="mt-1.5 text-sm text-rust">{error}</p>
      ) : (
        hint && <p className="mt-1.5 text-sm text-muted">{hint}</p>
      )}
    </div>
  )
}

export default Field
