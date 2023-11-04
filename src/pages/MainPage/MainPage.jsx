import { Input } from '@mui/material'
import { useState } from 'react'
import tracksList from '../../assets/tracksList'
import Track from '../../components/Track/Track'
import { runSearch } from '../../utils/runSearch'
import styles from './MainPage.module.scss'

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList)

  const handleChange = (e) => {
    const foundTracks = runSearch(e.target.value)
    setTracks(foundTracks)
  }

  return (
    <div className={styles.search}>
      <Input className={styles.input} placeholder='Поиск треков' onChange={handleChange} />
      <div className={styles.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
