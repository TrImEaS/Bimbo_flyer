import { FaCrown, FaStar } from "react-icons/fa"
import data from '../../Data/flyer_data.json'

export default function Nav() {
  return (
    <nav className="relative z-50 flex w-full py-3 justify-center gap-x-10 px-8 items-center bg-[#fafafa]">
      <section className="w-fit z-50 flex gap-x-20 items-center">
        {/*Logo*/}
        <a className="bg-blue-600 h-[150px] w-[150px] flex-col justify-center rounded-full flex items-center max-xl:justify-center border-4 border-blue-700" href="#">
          <FaCrown className="text-4xl text-yellow-400"/>
          <span className="font-bold text-white text-4xl">Outlet</span>
          <span className="text-[9px] text-white">PANIFICADOS Y GOLOSINAS</span>
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

        <article className="flex flex-col z-50">
          <i>{data.title}</i>
        </article>
      </section>
      <div className="absolute bottom-0 z-10 h-14 w-full bg-red-500"></div>
    </nav>
  )
}