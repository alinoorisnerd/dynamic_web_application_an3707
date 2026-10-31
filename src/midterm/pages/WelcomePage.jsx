import {useState} from 'react'
import useUserContext from '../hooks/use-user-context'

const WelcomePage = () => {
  const {saveName} = useUserContext()
  const [draft, setDraft] = useState('')
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    setDraft(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const trimmed = draft.trim()
    if (!trimmed) {
      setError('Type a name so we know who we are planning for.')
      return
    }

    setIsSubmitting(true)
    setError(null)
    try {
      await saveName(trimmed)
    } catch (err) {
      console.error(err)
      setError('Could not save your name. Is `npm run server` running?')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-wine px-6 text-cream">
      <div className="w-full max-w-md animate-rise">
        <p className="text-center text-xl sm:text-2xl">Welcome to</p>
        <h1 className="mt-2 text-center font-display text-7xl sm:text-8xl">Park-In</h1>
        <p className="mt-4 text-center text-cream/70">
          Park every deadline a day early, and finish with room to spare.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-12">
          <label htmlFor="name" className="block text-lg">
            What should we call you?
          </label>
          <input
            id="name"
            name="name"
            value={draft}
            onChange={handleChange}
            autoFocus
            autoComplete="given-name"
            placeholder="Your name"
            className="mt-3 w-full rounded-2xl bg-cream px-5 py-4 text-lg text-ink outline-none ring-cream/40 transition duration-200 placeholder:text-muted/70 focus:ring-4"
          />
          {error && <p className="mt-2 text-sm text-[#ffd6cc]">{error}</p>}
          <button
            disabled={isSubmitting}
            className="mt-4 w-full cursor-pointer rounded-2xl border-2 border-cream py-4 text-lg font-bold transition duration-200 hover:bg-cream hover:text-wine active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? 'Saving...' : 'Continue'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default WelcomePage
