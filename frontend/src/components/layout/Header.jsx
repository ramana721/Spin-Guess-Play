import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>Spin Guess Play</h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/game">Game</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
