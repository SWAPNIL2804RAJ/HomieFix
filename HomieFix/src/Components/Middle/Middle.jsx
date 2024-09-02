import React from 'react'
import './middle.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Middle() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <div className="Middle">
            <h1>Services We Provide</h1>
            <p className="description">
            Discover the comprehensive range of professional services we offer to meet all your home improvement and 
            maintenance needs. Our skilled and dedicated team is committed to delivering top-quality solutions tailored 
            to your specific requirements. Whether you're looking to enhance your living space with expert interior design,
             ensure the safety and efficiency of your electrical systems, or embrace sustainable energy with solar panel 
             installations, we've got you covered. From minor repairs to major renovations, our services are designed to 
             make your home a better place. Trust us to provide reliable, efficient, and innovative solutions that cater 
             to your lifestyle and budget.
            </p>
            <Carousel 
            responsive={responsive}  
            showDots={true}
            autoPlay={true} 
            autoPlaySpeed={5000}
            infinite={true}
            >
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="paints" />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="electrician" />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="painter" />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='interior' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='solar' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/5493664/pexels-photo-5493664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='whitewash' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='renovation' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/6474129/pexels-photo-6474129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='renovation1' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/7046168/pexels-photo-7046168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='renovation2' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='renovation3' />
              </div>
              <div className='serviceimage'>
                  <img src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="wooden" />
              </div>

            </Carousel>
        </div>
    )
}