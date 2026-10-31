import CountCard from './CountCard'
import useUserContext from '../hooks/use-user-context'
import useTasksContext from '../hooks/use-tasks-context'
import {isShort, isLong} from '../utils/tasks'

const Header = (props) => {
  const {filter, onFilterChange} = props
  const {name} = useUserContext()
  const {tasks} = useTasksContext()

  const openTasks = tasks.filter((task) => !task.done)
  const shortCount = openTasks.filter(isShort).length
  const longCount = openTasks.filter(isLong).length

  const toggleFilter = (next) => {
    onFilterChange(filter === next ? 'all' : next)
  }

  return (
    <header className="bg-wine text-cream">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-6 sm:px-8 sm:py-8">
        <div className="min-w-0">
          <p className="text-sm uppercase tracking-[0.2em] text-cream/80">Park-In</p>
          <h1 className="truncate font-display text-3xl capitalize sm:text-5xl">
            Hi, {name}
          </h1>
        </div>
        <div className="flex shrink-0 gap-3">
          <CountCard
            label="Short"
            hint="Show only tasks of 1 hour or less"
            count={shortCount}
            tone="text-moss"
            active={filter === 'short'}
            dimmed={filter === 'long'}
            onClick={() => toggleFilter('short')}
          />
          <CountCard
            label="Long"
            hint="Show only tasks over 1 hour"
            count={longCount}
            tone="text-rust"
            active={filter === 'long'}
            dimmed={filter === 'short'}
            onClick={() => toggleFilter('long')}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
