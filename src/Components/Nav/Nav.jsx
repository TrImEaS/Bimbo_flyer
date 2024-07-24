import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import logo from '../../Assets/Logos/logo.jpg'

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
    <nav className="relative z-50 flex w-full py-3 justify-center gap-x-10 px-8 items-center bg-[#fafafa]">
      <section className="w-fit z-50 flex gap-x-20 items-center">
        {/*Logo*/}
        <a className="bg-[#1c4ba8] h-[150px] w-[150px] flex-col justify-center rounded-full flex items-center max-xl:justify-center border-4 border-blue-700" href="#">
          <img src={logo} className="w-full h-full object-contain rounded-full" alt="" />
        </a>
      </section>

      <section className="w-[500px] z-50 flex flex-col justify-center items-center text-4xl font-extrabold text-shadow gap-y-3">
        <article className="flex gap-x-5 items-end">
          <FaStar className="text-yellow-400 text-3xl"/>
          <FaStar className="text-yellow-400 text-4xl"/>
          <FaStar className="text-yellow-400 text-5xl"/>
          <FaStar className="text-yellow-400 text-4xl"/>
          <FaStar className="text-yellow-400 text-3xl"/>
        </article>

        <article className="flex text-center flex-col z-50">
          <i>{title}</i>
        </article>
      </section>
      <div className="absolute bottom-0 z-10 h-14 w-full bg-red-500"></div>
    </nav>
  )
}