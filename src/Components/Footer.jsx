import { FaPhone } from "react-icons/fa"

  export default function Footer() {
    return(
      <section className="flex bg-blue-600 flex-col justify-center items-center gap-3 w-full text-white py-5">
        <article className="font-bold flex justify-center gap-x-10 items-center w-3/4">
          <span className="text-2xl">MERCADO CENTRAL LOCAL 061 Y 123</span>
          <div className="flex gap-x-2 items-center">
            <FaPhone className="text-3xl p-1 rounded-full bg-white text-blue-500 rotate-90"/>
            <span className="text-xl">11-2618-0413</span>
          </div>
        </article>

        <article className="flex flex-col justify-center items-center w-full bg-page-gray-light">
          <p className="font-bold text-center p-2 pb-4 border-2 w-fit h-10 text-sm">
            LOS PRECIOS ESTAN SUJETOS A MODIFICACION SIN PREVIO AVISO
          </p>
        </article>
      </section>
    )
  }