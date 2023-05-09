const Navbar = props => {
  const {seconds, score} = props
  return (
    <navbar>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul>
        <li>
          <p>Score:</p>
          <p>{score}</p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{seconds} sec</p>
        </li>
      </ul>
    </navbar>
  )
}

export default Navbar
