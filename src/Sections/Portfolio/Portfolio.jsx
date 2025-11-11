import React from 'react'
import Img1 from '../../Assets/bmw-service.jpg'
import Img2 from '../../Assets/BMW_INDIA.jpg'
import Img3 from '../../Assets/MINI_ID.jpg'
import Img4 from '../../Assets/tea-trails-india-s3.jpg'
import Img5 from '../../Assets/Lia-home-fragrances-b3.jpg'
import Img6 from '../../Assets/reliance-thumbnail1.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: "BMW Service Offers - TCS Project",
    github: 'https://bmwindia.co.in/offers/bmwservice/',
    demo: 'https://bmwindia.co.in/offers/bmwservice/'
  },
  {
    id: 2,
    image: Img2,
    title: "BMW India 3GL Campaign",
    github: 'https://www.bmwindia.com/3GL',
    demo: 'https://www.bmwindia.com/3GL'
  },
  {
    id: 3,
    image: Img3,
    title: "MINI Indonesia Microsite",
    github: 'https://secure.mini.co.id/generic-local-form.php',
    demo: 'https://secure.mini.co.id/generic-local-form.php'
  },
  {
    id: 4,
    image: Img4,
    title: "Tea Trails India Landing Page",
    github: 'https://demoskale.in/teatrails-india/',
    demo: 'https://demoskale.in/teatrails-india/'
  },
  {
    id: 5,
    image: Img5,
    title: "Lia Home Fragrances Campaign",
    github: 'https://demoskale.in/lia/',
    demo: 'http://demoskale.in/stop-o/'
  },
  {
    id: 6,
    image: Img6,
    title: "Reliance Education Portal",
    github: 'http://demoskale.in/reliance-education/',
    demo: 'http://demoskale.in/reliance-education/'
  }

]

const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio'>
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <a href={github} className='btn primary sm'>GitHub</a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className='btn white white-b sm'>Live Website</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
