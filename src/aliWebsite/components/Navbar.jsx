const GITHUB_URL = 'https://github.com/an3707'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-3 rounded-xl border border-night-line px-3 py-2 sm:px-4">
      <a
        href="/"
        className="truncate rounded-lg bg-white px-3 py-1 text-sm font-medium text-night sm:text-base"
      >
        an3707 Homework Wiki
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 text-sm text-slate-300 transition hover:text-white sm:text-base"
      >
        <span className="hidden sm:inline">Link to my </span>Github 🔗
      </a>
    </nav>
  )
}

export default Navbar
