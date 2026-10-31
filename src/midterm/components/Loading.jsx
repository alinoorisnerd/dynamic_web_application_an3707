const Loading = (props) => {
  const {message} = props

  return (
    <div className="flex flex-col items-center gap-4 py-24 text-muted">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-sand border-t-wine" />
      <p>{message}</p>
    </div>
  )
}

export default Loading
