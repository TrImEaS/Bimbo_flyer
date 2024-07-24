import priceImg from '../../Assets/Logos/priceImg.png'

export default function ProductCard({ product }) {
  return(
    <section className="relative bg-[#fafafa] rounded-xl border-2 flex flex-col h-[300px] w-[400px] p-5">
      <article className="flex flex-col h-full w-full max-h-[198px] justify-between">
        <span className="text-red-500 text-lg font-bold">{product.marca}</span>
        <span className="text-base font-bold">{product.descripcion}</span>
        <img 
          className="h-full w-full aspect-square" 
          src={product.imagen}/>      
      </article>

      <article className='absolute right-[-20px] -rotate-6 flex justify-center top-[-20px]'>
        <span className='absolute z-10 left-[22px] text-[21px] font-extrabold text-shadow'>
          OFERTA
        </span>
        <img 
          className='h-[80px] w-[135px] yellow-filter' 
          src={priceImg}/>
        <span className="absolute text-3xl top-6 font-semibold">${parseInt(product.precio)}</span>
      </article>
    </section>
  )
}