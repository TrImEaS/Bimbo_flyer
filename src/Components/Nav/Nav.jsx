import { useEffect, useState } from "react"
import { FaStar, FaInstagram, FaTiktok } from "react-icons/fa"
import logo from '../../Assets/Logos/logo.jpg'
// import video from '../../Assets/bg_video.mp4'

export default function Nav() {
  const [title, setTitle] = useState([])

  useEffect(()=> {
    fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/getFlyerData.php')
    .then(res => { 
      if(!res.ok) {
        throw error('Error al traer datos')
      }
      else{
        return res.json()
      }
    })
    .then(data => {
      setTitle(data.title)
    })
  },[])

  return (
    <nav className="relative z-50 flex max-sm:flex-col w-full py-3 overflow-x-hidden max-sm:pb-0 justify-center pt-16 gap-x-10 max-sm:px-0 px-8 items-center bg-[#fafafa]">
      <header className="absolute z-50 top-0 justify-center gap-x-4 text-red-50 flex items-center px-5 w-full bg-gradient-to-tl from-blue-500 to-red-500 h-14">
        <h1 className="text-lg font-bold">Seguinos en nuestras redes</h1>
        <div className="flex gap-3 items-center">
          <a className="duration-300 hover:scale-105" target="_blank" href="https://www.instagram.com/outlet_de_golosinas?igsh=MXJqc3JvYW85Zm5heg==">
            <FaInstagram className="text-2xl font-bold"/>
          </a>
          <a className="duration-300 hover:scale-105" target="_blank" href="https://www.tiktok.com/@outletdegolosinas?_t=8oLumZJK6a5&_r=1">
            <FaTiktok className="text-2xl font-bold"/>
          </a>
        </div>
      </header>
      <section className="w-fit z-50 flex gap-x-20 items-center">
        {/*Logo*/}
        <a className="bg-[#1c4ba8] h-[150px] z-50 w-[150px] flex-col justify-center rounded-full flex items-center max-xl:justify-center border-4 border-blue-700" href="#">
          <img src={logo} className="w-full h-full object-contain rounded-full" alt="" />
        </a>
        {/* <video src={video} autoPlay loop muted className="z-20 w-full asp absolute h-[220px] top-[56px] left-0"></video> */}
      </section>

      <section className="w-[500px] max-sm:w-full max-sm:text-3xl z-50 flex flex-col justify-center items-center text-4xl font-extrabold text-shadow gap-y-3">
        <article className="flex gap-x-5 items-end">
          <FaStar className="text-yellow-400 text-3xl"/>
          <FaStar className="text-yellow-400 text-4xl"/>
          <FaStar className="text-yellow-400 text-5xl"/>
          <FaStar className="text-yellow-400 text-4xl"/>
          <FaStar className="text-yellow-400 text-3xl"/>
        </article>

        <article className="flex text-center flex-col max-sm:bg-red-500 max-sm:justify-center max-sm:h-fit max-sm:py-5 max-sm:w-full z-50 max-sm:px-8">
          <i>{title}</i>
        </article>
      </section>
      <div className="absolute bottom-0 max-sm:hidden z-10 h-14 w-full bg-red-500"></div>
    </nav>
  )
}