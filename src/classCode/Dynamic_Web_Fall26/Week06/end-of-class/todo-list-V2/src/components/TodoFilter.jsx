const FILTERS = [
  {label: 'All', value: 'all'},
  {label: 'Active', value: 'active'},
  {label: 'Done', value: 'done'},
]

const TodoFilter = (props) => {
  const {filter, onChange} = props

  const renderedButtons = FILTERS.map((option) => {
    const isActive = option.value === filter

    return (
      <button
        key={option.value}
        onClick={() => onChange(option.value)}
        className={
          isActive
            ? 'bg-blue-900 border border-blue-900 text-white px-4 py-1 rounded'
            : 'border border-gray-300 text-gray-700 px-4 py-1 rounded'
        }
      >
        {option.label}
      </button>
    )
  })

  return <div className="flex gap-2 mb-4">{renderedButtons}</div>
}

export default TodoFilter
