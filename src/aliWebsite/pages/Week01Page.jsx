import recipeHtml from '../../classCode/Dynamic_Web_Fall26/Week01/recipe-card/index.html?raw'
import pancake from '../../classCode/Dynamic_Web_Fall26/Week01/recipe-card/pancake.jpg'
import BackBar from '../components/BackBar'
import styles from './Week01Page.module.css'

const recipePage = recipeHtml.replace('src="pancake.jpg"', `src="${pancake}"`)

const Week01Page = () => {
  return (
    <div className={styles.page}>
      <BackBar />
      <iframe
        title="Week 1 recipe card"
        srcDoc={recipePage}
        className={styles.frame}
      />
    </div>
  )
}

export default Week01Page
