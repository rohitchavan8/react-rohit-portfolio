import Logo from '../../Assets/ROHIT_small.jpg'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [showColors, setShowColors] = useState(false)
  const [activeTheme, setActiveTheme] = useState(270)

  const themes = [
    { hue: 270, name: 'Purple', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { hue: 0, name: 'Red', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { hue: 120, name: 'Green', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { hue: 240, name: 'Blue', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { hue: 60, name: 'Yellow', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { hue: 180, name: 'Cyan', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { hue: 300, name: 'Pink', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
    { hue: 30, name: 'Orange', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }
  ]

  const changeTheme = (hue) => {
    setActiveTheme(hue)
    document.documentElement.style.setProperty('--primary-hue', hue)
    setShowColors(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.theme_container')) {
        setShowColors(false)
      }
    }

    if (showColors) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => document.removeEventListener('click', handleClickOutside)
  }, [showColors])

  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html">
          <img src={Logo} alt="LOGO" className="nav_logo" />
        </a>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="theme_container">
          <button
            id="theme_icon"
            onClick={() => setShowColors(!showColors)}
            className={showColors ? 'active' : ''}
          >
            <IoIosColorPalette />
          </button>
          {showColors && (
            <div className="color_options">
              {themes.map((theme) => (
                <button
                  key={theme.hue}
                  className={`color_option ${activeTheme === theme.hue ? 'active' : ''}`}
                  style={{ background: theme.gradient }}
                  onClick={() => changeTheme(theme.hue)}
                  title={theme.name}
                >
                  <span className="color_name">{theme.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
