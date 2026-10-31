import '../styles/wiki.css'
import Navbar from '../components/Navbar'
import WelcomeCard from '../components/WelcomeCard'
import CardGrid from '../components/CardGrid'
import {cards} from '../data/cards'

const HomePage = () => {
  return (
    <div className="mx-auto flex min-h-dvh max-w-5xl flex-col gap-8 px-4 py-4 sm:gap-12 sm:px-6 sm:py-6">
      <Navbar />
      <WelcomeCard title="Welcome to my homework wiki 👋">
        This wiki documents the homework, midterm, and final project submissions
        for the class "Dynamic Web Applications", taught by Professor Katie Adee
      </WelcomeCard>
      <CardGrid cards={cards} />
    </div>
  )
}

export default HomePage
