import { useState } from "react"
import { FaPhone, FaAngleDown, FaAngleUp } from "react-icons/fa"

  export default function Footer() {
    const [formContainer, setFormContainer] = useState(false)

    return(
      <section className="flex bg-blue-600 flex-col justify-center items-center gap-3 w-full text-white py-5">
        <article className="font-bold flex justify-center gap-x-10 items-center w-3/4">
          <span className="text-2xl">MERCADO CENTRAL LOCAL 061 Y 123</span>
          <div className="flex gap-x-2 items-center">
            <FaPhone className="text-3xl p-1 rounded-full bg-white text-blue-500 rotate-90"/>
            <span className="text-xl">11-2618-0413</span>
          </div>
        </article>

        {/*Form container*/}
        <article className="w-full max-w-[500px] relative py-3 px-5 flex flex-col gap-5  rounded-sm border-2">
          <h1 className="font-bold text-xl text-center">Formulario de contacto</h1>
          {!formContainer 
            ? <FaAngleDown onClick={()=> setFormContainer(!formContainer)} className="absolute w-[100px] cursor-pointer right-4 text-3xl"/> 
            : <FaAngleUp onClick={()=> setFormContainer(!formContainer)} className="absolute w-[100px] cursor-pointer right-4 text-3xl"/>}
          {!formContainer 
            ? <FaAngleDown onClick={()=> setFormContainer(!formContainer)} className="absolute w-[100px] cursor-pointer left-4 text-3xl"/> 
            : <FaAngleUp onClick={()=> setFormContainer(!formContainer)} className="absolute w-[100px] cursor-pointer left-4 text-3xl"/>}
          <form 
            action="mail:info@outletgolosinas.com.ar" 
            encType="text/plain"
            className={`${formContainer ? 'flex' : 'hidden'} flex-col gap-4 items-center text-black rounded-lg`}
          >
            <div className="flex w-full gap-x-2">
              <label htmlFor="name" className="flex w-full">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Ingrese su nombre"
                  required 
                  className="border p-2 rounded w-full" 
                />
              </label>

              <label htmlFor="phone" className="flex w-full">
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  placeholder="Ingrese celular (whatsapp)"
                  required 
                  className="border p-2 rounded w-full" 
                />
              </label>
            </div>

            <label htmlFor="email" className="flex flex-col w-full">
              <input 
                type="email" 
                id="email" 
                placeholder="Ingrese un mail (opcional)"
                name="email" 
                className="border p-2 rounded" 
              />
            </label>

            <label htmlFor="subject" className="flex flex-col w-full">
              <textarea 
                id="subject" 
                name="subject" 
                placeholder="Escriba su motivo de contacto"
                maxLength={400}
                required 
                rows="3" 
                className="border p-2 rounded"
              />
            </label>

            <button type="submit" className="bg-white text-gray-600 w-full py-2 px-4 rounded hover:bg-blue-400 hover:text-white duration-300">
              Enviar
            </button>
          </form>
        </article>

        <article className="flex flex-col justify-center items-center w-full bg-page-gray-light">
          <p className="font-bold text-center p-2 pb-4 border-2 h-10 px-5 text-sm rounded-sm">
            LOS PRECIOS ESTAN SUJETOS A MODIFICACION SIN PREVIO AVISO
          </p>
        </article>
      </section>
    )
  }