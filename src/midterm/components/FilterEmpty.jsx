const FilterEmpty = (props) => {
  const {filter, onClear} = props

  return (
    <div className="mt-6 animate-rise rounded-3xl border-2 border-dashed border-line px-6 py-10 text-center">
      <p className="font-display text-3xl text-wine">No {filter} tasks here</p>
      <p className="mt-2 text-muted">
        {filter === 'short'
          ? 'Nothing that takes 1 hour or less.'
          : 'Nothing that takes more than 1 hour.'}
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 cursor-pointer rounded-xl border-2 border-wine px-5 py-2 font-bold text-wine transition duration-200 hover:bg-wine hover:text-cream active:scale-95"
      >
        Show all tasks
      </button>
    </div>
  )
}

export default FilterEmpty
