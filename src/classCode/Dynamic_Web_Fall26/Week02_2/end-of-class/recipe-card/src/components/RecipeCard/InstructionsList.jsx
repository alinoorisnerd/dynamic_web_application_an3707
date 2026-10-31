import {useState} from 'react'

import styles from './RecipeCard.module.css'

export default function InstructionsList(props) {
  const {instructions} = props
  const [isVisible, setIsVisible] = useState(true)

  const handleToggleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={styles.instructions_list}>
      <div className={styles.list_header}>
        <h3 className={styles.list_title}>Instructions</h3>
        <button onClick={handleToggleClick} className={styles.toggle_btn}>
          {isVisible ? 'Hide steps' : 'Show steps'}
        </button>
      </div>
      {isVisible && (
        <ol>
          {instructions.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ol>
      )}
    </div>
  )
}
