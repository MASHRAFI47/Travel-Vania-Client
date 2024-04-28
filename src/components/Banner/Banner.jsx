import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';


import { Typewriter } from 'react-simple-typewriter'



//images
import Rome from '../../../src/assets/images/rome-italy.jpeg'
import Eiffel from '../../../src/assets/images/eiffel-tower.jpeg'
import Alhambra from '../../../src/assets/images/alhambra palace.jpeg'
import Matterhorn from '../../../src/assets/images/the-matterhorn.jpeg'

const Banner = () => {
    return (
        <div className='relative'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <div className="max-w-3xl mx-8 md:mx-auto text-center z-[10] left-4 md:left-[5%] lg:left-[22%] top-[23%] md:top-[28%] lg:top-[30%] absolute swiper-texts">
                    <div className='App'>
                        <h1 className='swiper-heading' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            <span className='text-3xl md:text-5xl font-bold text-white'>Our tourism provides you to roam Europe in </span>{' '}
                            <span style={{ color: '#F2611C', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Rome', 'Eiffel Tower', 'Alhambra', 'Matterhorn', 'Many More!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={3000}
                                />
                            </span>
                        </h1>
                    </div>
                </div> 
                <SwiperSlide>
                    <div className="hero h-[30rem] md:h-[40rem] w-full relative bg-cover" style={{ backgroundImage: `url(${Rome})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[30rem] md:h-[40rem] w-full relative bg-cover" style={{ backgroundImage: `url(${Eiffel})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[30rem] md:h-[40rem] w-full relative bg-cover" style={{ backgroundImage: `url(${Alhambra})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[30rem] md:h-[40rem] w-full relative bg-cover" style={{ backgroundImage: `url(${Matterhorn})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner