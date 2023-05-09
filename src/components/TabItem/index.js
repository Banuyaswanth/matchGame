const TabItem = props => {
  const {each, changeActiveTab, isActive} = props
  const {tabId, displayText} = each
  const tabClicked = () => {
    changeActiveTab(tabId)
  }
  const tabStatus = isActive ? 'active' : 'inactive'

  return (
    <li>
      <button onClick={tabClicked} className={tabStatus}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
