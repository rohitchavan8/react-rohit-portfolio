import HeaderImg from '../../Assets/10.jpg'
import headerData from './headerData'

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImg} alt="Header Portfolio" />
        </div>
        <h3>Rohit Chavan</h3>
        <p>
          I am a Senior Frontend Developer and Team Lead with 10+ years of experience, specializing in React, Angular, and modern web technologies. If you have any
          requirement for your own website creation or any other Website related
          work please send me the details.
        </p>
        <div className="header_cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>

        <div className="header-socials">
          {headerData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
