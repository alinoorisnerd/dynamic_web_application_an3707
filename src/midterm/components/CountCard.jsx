const CountCard = (props) => {
  const {label, count, hint, tone, active, dimmed, onClick} = props

  return (
    <button
      type="button"
      onClick={onClick}
      title={hint}
      aria-pressed={active}
      className={`w-20 cursor-pointer rounded-2xl bg-cream py-2 text-center transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:scale-95 sm:w-28 sm:py-3 ${active ? '-translate-y-1 shadow-lg shadow-black/30 ring-4 ring-cream/40' : ''} ${dimmed ? 'opacity-60 hover:opacity-100' : ''}`}
    >
      <span key={count} className={`block animate-rise text-2xl font-bold sm:text-3xl ${tone}`}>
        {count}
      </span>
      <span className={`block text-xs sm:text-sm ${active ? 'font-bold text-ink' : 'text-muted'}`}>
        {label}
      </span>
    </button>
  )
}

export default CountCard
