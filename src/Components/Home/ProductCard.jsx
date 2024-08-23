import priceImg from '../../Assets/Logos/priceImg.png'

export default function ProductCard({ product }) {
  return(
    <section className="relative bg-[#fafafa] rounded-xl border-2 flex flex-col max-h-[400px] max-w-[400px] w-[400px] h-[400px] max-sm:w-[85%] p-5">
      <article className="flex flex-col h-full w-full justify-between">
        <span className="text-red-500 h-[10%] text-lg font-bold">{product.marca}</span>
        <span className="text-base font-bold h-[10%]">{product.descripcion}</span>
        <img 
          className="h-full w-full aspect-square select-none" 
          src={product.imagen}/>      
      </article>

      <article className='absolute right-[-30px] -rotate-6 flex justify-center top-[-45px] select-none'>
        <span className='absolute z-10 left-[28px] text-[21px] font-extrabold text-shadow'>
          OFERTA
        </span>
        <img 
          className='h-[90px] w-[155px] yellow-filter' 
          src={priceImg}/>
        <span className="absolute text-[22px] top-6 font-semibold">${parseFloat(product.precio).toFixed(2)}</span>
        <span className="absolute text-sm top-[55px] font-semibold">Cada uno</span>
      </article>
    </section>
  )
}