import {useEffect} from 'react'
import WelcomePage from './pages/WelcomePage'
import TasksPage from './pages/TasksPage'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import useUserContext from './hooks/use-user-context'

const App = () => {
  const {name, isLoading, error, loadName} = useUserContext()

  useEffect(() => {
    loadName()
  }, [loadName])

  if (isLoading) {
    return <Loading message="Getting Park-In ready..." />
  }

  if (error) {
    return (
      <main className="px-5 py-16">
        <ErrorMessage message={error} onRetry={loadName} />
      </main>
    )
  }

  if (!name) {
    return <WelcomePage />
  }

  return <TasksPage />
}

export default App
