import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Spinner from '../Spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function BannerCarousel() {
  const [currentBanners, setCurrentBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const mobileScreen = 768;

  const desktopBanners = [
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/desktop/banner_1.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/desktop/banner_2.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/desktop/banner_3.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/desktop/banner_4.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/desktop/banner_5.jpg',
  ];

  const mobileBanners = [
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/mobile/banner_mobile_1.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/mobile/banner_mobile_2.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/mobile/banner_mobile_3.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/mobile/banner_mobile_4.jpg',
    'https://outletgolosinas.com.ar/admin_flyer/flyer_banners/mobile/banner_mobile_5.jpg',
  ];

  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const fetchAvailableBanners = async (banners) => {
    const checkImages = banners.map(banner => checkImageExists(banner));
    const results = await Promise.all(checkImages);
    return banners.filter((banner, index) => results[index]);
  };

  const updateBanners = async () => {
    setLoading(true);
    const bannersToCheck = window.innerWidth < mobileScreen ? mobileBanners : desktopBanners;
    const availableBanners = await fetchAvailableBanners(bannersToCheck);
    setCurrentBanners(availableBanners);
    setLoading(false);
  };

  useEffect(() => {
    updateBanners();
    const handleResize = () => updateBanners();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!currentBanners.length) {
    return null;
  }

  return (
    <Carousel
      autoPlay
      interval={5000}
      showStatus={false}
      infiniteLoop
      transitionTime={500}
      showThumbs={false}
      stopOnHover
      swipeable
    >
      {currentBanners.map((banner, index) => (
        <div key={index} className="w-full h-full min-h-[200px]">
          <img
            src={banner}
            className="h-full w-full object-fill select-none"
            loading="eager"
            alt={`banner ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
}
