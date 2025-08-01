import { useEffect, useState } from "react"
import { FaStar, FaInstagram, FaTiktok } from "react-icons/fa"
import logo from '../../Assets/Logos/logo.jpg'
import video from '../../Assets/bg_video.mp4'

export default function Nav() {
  const [title, setTitle] = useState([])

  useEffect(()=> {
    fetch('https://outletgolosinas.com.ar/outletgolosinas/admin_flyer/admin_page/getTitles.php')
    .then(res => { 
      if(!res.ok) 
        throw error('Error al traer datos')
      
      return res.json()
    })
    .then(data => setTitle(data[0].TITLE))
  },[])

  return (
    <nav className="relative z-50 bg-red-500 flex flex-col w-full gap-x-10 max-sm:px-0 items-center sm:pb-5">
      <header className="z-50 top-0 justify-center gap-x-4 text-red-50 flex items-center px-5 w-full bg-gradient-to-tl from-blue-500 to-red-500 h-14">
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

      <section className="w-full justify-center z-20 h-full min-h-[150px] flex gap-x-20 items-center">
        {/*Logo*/}

        <div className="absolute z-10 overflow-hidden h-full w-full">
          <video src={video} autoPlay loop muted className="min-w-full min-h-full max-sm:object-cover object-contain"></video>
        </div>
        
        <a className="bg-[#1c4ba8] h-[150px] z-50 w-[150px] flex-col justify-center rounded-full flex items-center max-xl:justify-center border-4 border-blue-700" href="#">
          <img src={logo} className="w-full h-full object-contain rounded-full" alt="" />
        </a>
      </section>

      <section className="w-[500px] pt-5 max-sm:pt-0 max-sm:w-full max-sm:text-3xl z-50 flex flex-col justify-center items-center text-4xl font-extrabold text-shadow gap-y-3">
        <article className="flex gap-x-5 items-end">
          <FaStar className="text-yellow-400 text-3xl"/>
          <FaStar className="text-yellow-400 text-4xl"/>
          <FaStar className="text-yellow-400 text-5xl"/>
          <FaStar className="text-yellow-400 text-4xl"/>
          <FaStar className="text-yellow-400 text-3xl"/>
        </article>

        <article className="flex text-center bg-red-500 sm:bg-transparent flex-col w-full max-sm:justify-center max-sm:h-fit max-sm:py-5 max-sm:w-full z-50 max-sm:px-8">
          <i>{title}</i>
        </article>
      </section>
      {/* <div className="absolute bottom-0 max-sm:hidden z-30 h-14 w-full bg-red-500">
      </div> */}
    </nav>
  )
}