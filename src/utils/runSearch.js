import tracksList from '../assets/tracksList'

export const runSearch = (query) => {
  if (!query) {
    return tracksList
  }

  const lowerCaseQuery = query.toLowerCase()

  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) || track.artists.toLowerCase().includes(lowerCaseQuery)
  )
}
