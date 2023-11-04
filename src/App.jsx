import styles from './App.module.scss'
import Playbar from './components/Playbar/Playbar'
import MainPage from './pages/MainPage/MainPage'

const App = () => (
  <div className={styles.wrapper}>
    <MainPage />
    <Playbar />
  </div>
)

export default App
