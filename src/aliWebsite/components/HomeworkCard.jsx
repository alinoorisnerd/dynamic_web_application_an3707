const HomeworkCard = (props) => {
  const {title, description, href, color} = props

  const content = (
    <>
      <h2 className="border-b border-white/25 px-5 py-4 text-center text-lg font-semibold">
        {title}
      </h2>
      <p className="flex flex-1 items-center justify-center px-5 py-5 text-center text-sm text-white/90">
        {description}
      </p>
    </>
  )

  const classes = `flex h-full flex-col rounded-xl bg-linear-to-br ${color} text-white shadow-lg shadow-black/30`

  if (!href) {
    return <div className={`${classes} opacity-80`}>{content}</div>
  }

  return (
    <a
      href={href}
      className={`${classes} transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
    >
      {content}
    </a>
  )
}

export default HomeworkCard
