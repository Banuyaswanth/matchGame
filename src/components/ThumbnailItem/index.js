const ThumbnailItem = props => {
  const {each, checkForThumbnailClick} = props
  const {id, thumbnailUrl} = each
  const thumbnailClicked = () => {
    checkForThumbnailClick(id)
  }
  return (
    <li>
      <button onClick={thumbnailClicked}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
