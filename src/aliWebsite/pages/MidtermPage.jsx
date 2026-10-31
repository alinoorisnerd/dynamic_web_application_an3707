import '../styles/midterm.css'
import BackBar from '../components/BackBar'
import MidtermApp from '../../midterm/App'
import {UserProvider} from '../../midterm/context/user'
import {TasksProvider} from '../../midterm/context/tasks'

const MidtermPage = () => {
  return (
    <>
      <BackBar />
      <UserProvider>
        <TasksProvider>
          <MidtermApp />
        </TasksProvider>
      </UserProvider>
    </>
  )
}

export default MidtermPage
