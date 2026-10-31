import {PlusIcon} from './Icons'

const AddButton = (props) => {
  const {onClick, floating} = props

  const position = floating
    ? 'fixed bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10'
    : 'mx-auto mt-8'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Add a task"
      className={`${position} group grid h-20 w-20 cursor-pointer place-items-center rounded-full bg-wine text-cream shadow-lg shadow-wine/30 transition duration-200 hover:scale-110 hover:bg-wine-dark hover:shadow-xl active:scale-95`}
    >
      <PlusIcon className="h-9 w-9 transition duration-300 group-hover:rotate-90" />
    </button>
  )
}

export default AddButton
