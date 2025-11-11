import portfolioImg from '../../Assets/89.png'
import CV from '../../Assets/ROHIT_CHAVAN_10Years_exp_cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './Data'
import Card from '../../Components/Card'

export const About = () => {
  return (
    <section id="about">
      <div className="container container-about">
        <div className="about_left">
          <div className="about_portfolio">
            <img src={portfolioImg} alt="About Me" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((item) => (
              <Card key={item.id} className="about-card">
                <span className="about-card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects for my clients love have always been my passion.
            Being in the web development industry for over 10 years and serving more
            than 50 plus happy clients worldwide, I'm always motivated to do
            more!
          </p>
          <p>
            Hi, my name is Rohit Chavan from India. I'm a Senior Frontend Developer and Team Lead with a
            Post graduation degree in Information Technology. My top priority is
            to get your business online the right way, giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project let's get started! Check out my resume below!
          </p>

          <a href={CV} alt="Resume/CV" download className="btn primary ">
            Download CV <HiDownload className='pdficon' />
          </a>
        </div>
      </div>
    </section>
  )
}
