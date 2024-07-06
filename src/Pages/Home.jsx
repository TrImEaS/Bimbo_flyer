import Footer from '../Components/Footer.jsx'
import BannerCarrousel from '../Components/Home/BannerCarrousel.jsx'
import Nav from '../Components/Nav/Nav.jsx' 
import Products from '../Components/Home/Products.jsx'

export default function Home() {
  return(
    <section className='flex flex-col items-center justify-between min-h-screen h-full w-full'>
      <Nav/>
      <BannerCarrousel/>
      <Products/>
      <Footer/>
    </section>
  )
}