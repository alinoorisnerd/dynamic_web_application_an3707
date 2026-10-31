import AddButton from './AddButton'
import {CheckIcon} from './Icons'

const EmptyState = (props) => {
  const {title, message, showCheck, onAdd} = props

  return (
    <section className="flex animate-rise flex-col items-center py-16 text-center sm:py-24">
      {showCheck && (
        <div className="mb-8 grid h-24 w-24 place-items-center rounded-[2rem] border-4 border-moss text-moss transition duration-300 hover:rotate-6 hover:scale-105">
          <CheckIcon className="h-10 w-10" />
        </div>
      )}
      <h2 className="font-display text-5xl text-wine sm:text-6xl">{title}</h2>
      <p className="mt-3 text-lg text-muted">{message}</p>
      <AddButton onClick={onAdd} />
    </section>
  )
}

export default EmptyState
