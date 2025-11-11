
import AVTR1 from '../../Assets/testimonial-avatar-10.png'
import AVTR2 from '../../Assets/testimonial-avatar-09.png'
import AVTR3 from '../../Assets/testimonial-avatar-08.png'
import AVTR4 from '../../Assets/testimonial-avatar-07.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const data = [
  {
    avtr: AVTR1,
    name: 'Rakesh Kediya',
    review: '"I am really happy with your service, it is exceptional, Web Developer is just great. When I have a question they answer it at once, they have more than an outstanding customer service. After having a bad experience with my old Web Developer, I would say that Web Developer people are very professional and their knowledge is incredible, they also solve problems very fast, I am impressed. I recommend you are a good Web Developer to all my customers, friends and clients.Thank you for your patience and your great job."'
  },
  {
    avtr: AVTR2,
    name: 'Poonam Verma',
    review: '"I am glad to hear that you had a positive experience with the services provided by Rohit and that they helped you develop your business online and improve your coaching classes marketing efforts. It sounds like the new website design and ideas have contributed significantly to making your business journey smoother and more successful. If you have any more questions or need further assistance, feel free to ask. Best of luck with your continued business growth!"'
  },
  {
    avtr: AVTR3,
    name: 'Mr. Pravin',
    review: 'Whether its crafting a stunning website or ensuring seamless content management, Rohits expertise shines through. He has undoubtedly played a crucial role in enhancing the online presence of businesses across Mumbai. His in-depth knowledge of web development combined with his creative approach have made every project work on a success. If youre seeking top-notch web development and exceptional results, Rohit is the person to rely on.'
  },
  {
    avtr: AVTR4,
    name: 'Jessy Kappor',
    review: '"I do freelance jobs with Rohit who has a web developer, and I must say he is one of the best web developers in the business today. I handle development, hosting, and content management orders for him, covering areas from Bhayandar to Mira Road, Thane to Navi Mumbai, and Bandra to Dadar. He consistently delivers quality work each and every time."'
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial">
      <h2>Testimonials</h2>
      <h5>Review from clients</h5>

      <Swiper pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper container testimo_container" spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>

        {
          data.map(({ avtr, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial testimonial1">
                <div className="client_avtar">
                  <img src={avtr} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className="review">{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
