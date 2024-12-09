import React from 'react'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
import home4 from '../../assets/home4.png'
import home5 from '../../assets/home5.jpg'
import home6 from '../../assets/home6.jpg'
import home7 from '../../assets/home6.jpg'
import Slider from "react-slick";

export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>


    <div className='pt-11 pl-48'>
    <div class="uppercase text-gray-800 dark:text-indigo-400 pb-5 font-black text-3xl">
                Home section
            </div>
    <Slider {...settings}>
      <div>
       
      <img src={home1} className='w-2/3' alt="" />
      </div>
      <div>
      <img src={home2} className='w-2/3'  alt="" />
      </div>
      <div>
      <img src={home3} className='w-2/3'  alt="" />
      </div>
      <div>
      <img src={home4} className='w-2/3'  alt="" />
      </div>
      <div>
      <img src={home5} className='w-2/3'  alt="" />
      </div>
      <div>
      <img src={home6} className='w-2/3'  alt="" />
      </div>
      <div>
      <img src={home7} className='w-2/3'  alt="" />
      </div>
    </Slider>
    

    </div>
    
    </>
  )
}
