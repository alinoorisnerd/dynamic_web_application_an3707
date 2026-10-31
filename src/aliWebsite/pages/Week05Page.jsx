import '../styles/wiki.css'
import Navbar from '../components/Navbar'
import WelcomeCard from '../components/WelcomeCard'
import CardGrid from '../components/CardGrid'
import {week05Projects} from '../data/cards'

const Week05Page = () => {
  return (
    <div className="mx-auto flex min-h-dvh max-w-5xl flex-col gap-8 px-4 py-4 sm:gap-12 sm:px-6 sm:py-6">
      <Navbar />
      <WelcomeCard title="Week 5">
        Two projects this week: an image search that talks to the Unsplash API,
        and a memory game that keeps your best score.
      </WelcomeCard>
      <div className="mx-auto w-full max-w-2xl">
        <CardGrid cards={week05Projects} />
      </div>
    </div>
  )
}

export default Week05Page
