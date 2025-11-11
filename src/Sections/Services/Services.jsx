import { GiCheckMark } from 'react-icons/gi'

const Services = () => {
  return (
    <section id="services">
      <div className="services_head">
        <h2>My Services</h2>
        <h5>I deliver exceptional results in all services below</h5>
      </div>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul>
            <li><GiCheckMark className='service_icon' />Design as per your thinking</li>
            <li><GiCheckMark className='service_icon' />Creative and Visual Design </li>
            <li><GiCheckMark className='service_icon' />Creative Direction and Branding </li>
            <li><GiCheckMark className='service_icon' />User Experience Research </li>
            <li><GiCheckMark className='service_icon' />Mobile UI / UX</li>

          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Frontend Development</h3>
          </div>

          <ul>
            <li><GiCheckMark className='service_icon' />Developing Responsive Websites</li>
            <li><GiCheckMark className='service_icon' />Single-Page Applications (SPA)</li>
            <li><GiCheckMark className='service_icon' />SaaS Product Development</li>
            <li><GiCheckMark className='service_icon' />CMS - WordPress, Joomla, Drupal</li>
            <li><GiCheckMark className='service_icon' />Website Performance Optimization</li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>React / Angular Developer</h3>
          </div>

          <ul>
            <li><GiCheckMark className='service_icon' />Single Page Applications (SPA)</li>
            <li><GiCheckMark className='service_icon' />ReactJS & Next.js Development</li>
            <li><GiCheckMark className='service_icon' />Angular Framework Development</li>
            <li><GiCheckMark className='service_icon' />Application Support & Maintenance</li>
            <li><GiCheckMark className='service_icon' />Performance Optimization & SEO</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
