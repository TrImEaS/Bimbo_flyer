import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Spinner from '../Spinner'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function BannerCarousel() {
  const [banners, setBanners] = useState([])
  const [loadingImages, setLoadingImages] = useState(true)

  useEffect(() => {
    const bannerPaths = [];
    
    const imageExists = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const loadImages = async () => {
      for (let i = 1; i <= 3; i++) {
        const path = `https://technologyline.com.ar/others/Images/Home-Banners/banner${i}.jpg`;
        if (await imageExists(path)) {
          bannerPaths.push(path);
        }
      }
      setBanners(bannerPaths);
      setLoadingImages(false);
    };

    loadImages();
  }, []);


  return (
    <section>
      {loadingImages 
      ? (
        <div className='w-full pt-10'><Spinner/></div>
      ) 
      
      : (
        <Carousel 
          autoPlay={5000}
          infiniteLoop
          stopOnHover
          transitionTime={300}
          showThumbs={false}
          swipeable
          emulateTouch
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full h-full">
              <img 
                src={banner}
                className="max-h-[500px] h-full w-full object-fill select-none"
                loading="eager"
                alt={`Banner ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      )}    
    </section>
  )
}


// const mobileScreen = 768
//useState(window.innerWidth < mobileScreen ? bannerMobile_1 : banner1)
//useState(window.innerWidth < mobileScreen ? bannerMobile_2 : banner2)
//useState(window.innerWidth < mobileScreen ? bannerMobile_3 : banner3)
// Change automaticaly
// useEffect(() => {
//   const handleResize = () => {
//     setCurrentBanner1(window.innerWidth < mobileScreen ? bannerMobile_1 : banner1)
//     setCurrentBanner2(window.innerWidth < mobileScreen ? bannerMobile_2 : banner2)
//     setCurrentBanner3(window.innerWidth < mobileScreen ? bannerMobile_3 : banner3)
//     setCurrentBanner4(window.innerWidth < mobileScreen ? bannerMobile_4 : banner4)
//   }

//   window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
// }, [])
