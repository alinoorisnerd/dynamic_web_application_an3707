import HomeworkCard from './HomeworkCard'

const CardGrid = (props) => {
  const {cards} = props

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <li key={card.id}>
          <HomeworkCard
            title={card.title}
            description={card.description}
            href={card.href}
            color={card.color}
          />
        </li>
      ))}
    </ul>
  )
}

export default CardGrid
