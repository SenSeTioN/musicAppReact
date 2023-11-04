import { Pause, PlayArrow } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import cn from 'classnames'
import { useContext } from 'react'
import { AudioContext } from '../../context/AudioContext'
import secondsToMMSS from '../../utils/secondsToMMSS'
import styles from './Track.module.scss'

const Track = (track) => {
  const { id, preview, title, artists, duration } = track
  const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext)
  const isCurrentTrack = currentTrack.id === id

  const formattedDuration = secondsToMMSS(duration)

  return (
    <div className={cn(styles.track, isCurrentTrack && styles.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause className={styles.icon} /> : <PlayArrow className={styles.icon} />}
      </IconButton>
      <img className={styles.preview} src={preview} alt='' />
      <div className={styles.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  )
}

export default Track
