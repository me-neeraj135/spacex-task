import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="header ">
      <div className="global-container nav-container">
        <div className="logo">
          <span className="logo-text">SPACEX</span>
        </div>
        <nav className={`navigation ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link">
                Главная
              </a>
            </li>
            <li>
              <a href="#tech" className="nav-link">
                Технологии
              </a>
            </li>
            <li>
              <a href="#flights" className="nav-link">
                График полетов
              </a>
            </li>
            <li>
              <a href="#guarantees" className="nav-link">
                Гарантии
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                О компании
              </a>
            </li>
            <li>
              <a href="#contacts" className="nav-link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
