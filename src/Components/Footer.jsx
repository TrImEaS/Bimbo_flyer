import { FaPhone } from "react-icons/fa"

  export default function Footer() {
    return(
      <section className="flex bg-blue-600 flex-col justify-center items-center gap-3 w-full text-white py-5">
        <article className="w-full max-w-md py-5">
          <form 
            action="mail:info@outletgolosinas.com.ar" 
            encType="text/plain"
            className="flex flex-col gap-4 bg-white text-blue-600 p-5 rounded-lg"
          >
            <h1 className="font-bold text-xl text-center">Formulario de contacto</h1>
            <label htmlFor="name" className="flex flex-col">
              <span className="font-bold">Nombre*</span>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="border p-2 rounded" 
              />
            </label>

            <label htmlFor="email" className="flex flex-col">
              <span className="font-bold">Email (opcional)</span>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="border p-2 rounded" 
              />
            </label>

            <label htmlFor="phone" className="flex flex-col">
              <span className="font-bold">Número*</span>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                required 
                className="border p-2 rounded" 
              />
            </label>

            <label htmlFor="subject" className="flex flex-col">
              <span className="font-bold">Motivo*</span>
              <textarea 
                id="subject" 
                name="subject" 
                required 
                rows="4" 
                className="border p-2 rounded"
              />
            </label>

            <button 
              type="submit" 
              className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
            >
              Enviar
            </button>
          </form>
        </article>

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