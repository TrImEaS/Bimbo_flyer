import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Spinner from '../Spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function BannerCarousel() {
  const [desktopBanners, setDesktopBanners] = useState([]);
  const [mobileBanners, setMobileBanners] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    fetchBanners();
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchBanners = () => {
    fetch('http://31.97.250.187/outletgolosinas/admin_flyer/admin_page/getBanners.php')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching banners');
        }
        return res.json();
      })
      .then(data => {
        // Filtrar banners según el nombre para móvil y escritorio
        const mobile = data.filter(banner => banner.BANNER_NAME.includes('MOBILE') && banner.IMAGE_PATH);
        const desktop = data.filter(banner => banner.BANNER_NAME.includes('DESKTOP') && banner.IMAGE_PATH);

        setMobileBanners(mobile);
        setDesktopBanners(desktop);
      })
      .catch(error => console.error(error));
  };

  // Determinar qué banners mostrar basado en la resolución
  const bannersToShow = isMobile ? mobileBanners : desktopBanners;
  const shouldShowCarousel = bannersToShow.length > 0;

  return (
    <div className='flex flex-col w-full items-center bg-[#1925d2] gap-3 sm:pb-3'>
      {shouldShowCarousel ? (
        <Carousel
          autoPlay
          interval={5000}
          showStatus={false}
          infiniteLoop
          transitionTime={500}
          showThumbs={false}
          stopOnHover
          swipeable
          emulateTouch
        >
          {bannersToShow.map((banner, index) => (
            <div key={index} className="w-full h-full min-h-[200px] max-h-[550px]">
              <img
                src={banner.IMAGE_PATH}
                className="h-full w-full object-fill select-none"
                loading="eager"
                alt={`banner ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      ) : ''}
    </div>
  );
}

{/* <div>No banners available</div> */}