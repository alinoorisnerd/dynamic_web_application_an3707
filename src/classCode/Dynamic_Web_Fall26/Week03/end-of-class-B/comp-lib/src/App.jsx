import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import TabsPage from './pages/TabsPage'
const App = () => {
  return (
    <div className="container mx-auto mt-4 px-4">
      <ButtonPage />
      <hr className="my-8"></hr>
      <AccordionPage />
      <hr className="my-8"></hr>
      <TabsPage />
    </div>
  )
}

export default App
