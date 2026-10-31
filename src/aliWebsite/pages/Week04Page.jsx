import {BrowserRouter} from 'react-router-dom'
import '../styles/week04.css'
import BackBar from '../components/BackBar'
import CompLibApp from '../../classCode/Dynamic_Web_Fall26/Week04/end-of-class-B/src/App'

const Week04Page = () => {
  return (
    <>
      <BackBar />
      <BrowserRouter basename="/week04">
        <CompLibApp />
      </BrowserRouter>
    </>
  )
}

export default Week04Page
