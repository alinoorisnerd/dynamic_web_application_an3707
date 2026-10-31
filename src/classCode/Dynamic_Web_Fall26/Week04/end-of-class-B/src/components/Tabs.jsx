import {useState} from 'react'
import cx from 'classnames'
import Panel from './Panel'

const Tabs = (props) => {
  const {items} = props

  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (nextIndex) => {
    setActiveIndex(nextIndex)
  }

  const renderedTabs = items.map((item, index) => {
    const isActive = index === activeIndex

    return (
      <button
        key={item.id}
        onClick={() => handleClick(index)}
        className={cx('px-4 py-2 -mb-px border-b-2 cursor-pointer', {
          'border-blue-500 text-blue-600 font-semibold': isActive,
          'border-transparent text-gray-500 hover:text-gray-800': !isActive,
        })}
      >
        {item.label}
      </button>
    )
  })

  return (
    <Panel>
      <div className="flex flex-wrap border-b">{renderedTabs}</div>
      <div className="p-5">{items[activeIndex]?.content}</div>
    </Panel>
  )
}

export default Tabs
