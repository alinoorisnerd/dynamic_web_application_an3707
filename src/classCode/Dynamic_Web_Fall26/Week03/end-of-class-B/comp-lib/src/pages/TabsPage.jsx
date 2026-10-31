import Tabs from '../components/Tabs'

const ITEMS = [
  {
    id: 'coop',
    label: 'Coop',
    content:
      'Give every chicken about four square feet inside the coop, a roost to sleep on, and one nesting box for every four hens.',
  },
  {
    id: 'feed',
    label: 'Feed',
    content:
      'Layer pellets make up most of the diet. Kitchen scraps and grit are treats, and fresh water should never run out.',
  },
  {
    id: 'eggs',
    label: 'Eggs',
    content:
      'Most hens start laying at around five months old. Collect the eggs every day so they stay clean and nobody goes broody.',
  },
]

const TabsPage = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">Tabs Page</h1>
      <Tabs items={ITEMS} />
    </div>
  )
}

export default TabsPage
