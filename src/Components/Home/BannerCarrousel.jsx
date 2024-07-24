import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Spinner from '../Spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function BannerCarousel() {
  const [banners, setBanners] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    // Function to check if an image exists
    const imageExists = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    // Function to fetch banners and validate images
    const fetchBanners = async () => {
      try {
        const res = await fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/getBanners.php');
        if (!res.ok) {
          throw new Error('Error al traer datos');
        }
        const data = await res.json();
        console.log(data);

        // Filter out banners with invalid or empty image paths
        const validBanners = await Promise.all(data.map(async (banner) => {
          const { image_path } = banner;
          if (image_path && await imageExists(image_path)) {
            return banner;
          }
          return null;
        }));

        // Remove null entries
        setBanners(validBanners.filter(banner => banner !== null));
        setLoadingImages(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setLoadingImages(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <section>
      {loadingImages ? (
        <div className='w-full pt-10'>
          <Spinner />
        </div>
      ) : (
        <Carousel 
          autoPlay
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
                src={banner.image_path}
                className="max-h-[500px] h-full w-full object-fill select-none"
                loading="eager"
                alt={`Banner ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
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
