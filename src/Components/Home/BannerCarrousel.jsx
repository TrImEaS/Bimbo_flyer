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
    fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/getBanners.php')
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
    <div className='flex flex-col w-full items-center bg-yellow-400 gap-3 sm:pb-3'>
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
      <a href='https://outletdegolosinas.ecu.red/?v=1724442209792#/place-detail-page' target='_blank' className="z-30 py-2 px-10 max-[770px]:my-2 max-sm:my-0 max-sm:mb-3 rounded-xl hover:scale-105 cursor-pointer duration-300 bg-red-500 flex flex-col text-center text-white text-lg sm:text-xl h-full w-fit sm:w-full sm:max-w-[400px]">
        <span>HAZ CLICK AQUÍ Y EXPLORÁ</span>
        <span>NUESTRO CATALOGO MAYORISTA!</span>
      </a>
    </div>
  );
}

{/* <div>No banners available</div> */}