const WelcomeCard = (props) => {
  const {title, children} = props

  return (
    <section className="mx-auto w-full max-w-2xl rounded-xl border border-night-line bg-white/[0.02]">
      <h1 className="border-b border-night-line px-5 py-4 text-center text-lg font-medium sm:text-xl">
        {title}
      </h1>
      <p className="px-5 py-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        {children}
      </p>
    </section>
  )
}

export default WelcomeCard
