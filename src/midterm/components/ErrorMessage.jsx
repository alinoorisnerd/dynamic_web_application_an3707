const ErrorMessage = (props) => {
  const {message, onRetry} = props

  return (
    <div
      role="alert"
      className="mx-auto mt-8 max-w-md animate-rise rounded-3xl border border-rust/30 bg-rust/10 p-6 text-center"
    >
      <p className="font-display text-3xl text-wine">Something went wrong</p>
      <p className="mt-2 text-ink">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 cursor-pointer rounded-xl bg-wine px-6 py-2.5 font-bold text-cream transition duration-200 hover:-translate-y-0.5 hover:bg-wine-dark active:scale-95"
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorMessage
