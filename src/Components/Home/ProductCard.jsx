import priceImg from '../../Assets/Logos/priceImg.png'

export default function ProductCard({ product }) {
  return(
    <section className="relative bg-[#fafafa] rounded-xl border-2 flex flex-col h-[450px] w-full 
    max-sm:scale-[.85] max-[850px]:w-[300px] max-sm:h-[350px] max-w-[400px] p-3 px-1 justify-center items-center">
      <article className="flex flex-col h-[80%] w-full items-center justify-between">
        <img 
          className="h-[80%] w-full select-none" 
          src={product.imagen}/>      
        <span className="h-[10%] text-lg font-bold w-full text-center max-sm:text-base max-sm:text-[14px] pt-1">{product.marca}</span>
        <span className="text-base h-[10%] w-full text-center max-sm:text-xs">{product.descripcion}</span>
      </article>

      <article className='scale-[.8] bg-yellow-300 w-full max-w-[250px] -skew-x-6 flex justify-center items-center h-[20%]'>
        <div className='transform skew-x-6 flex flex-col justify-center items-center'>
          <span className="text-3xl font-semibold">${parseFloat(product.precio).toFixed(2)}</span>
          <span className="text-sm font-semibold">Cada uno</span>
        </div>
      </article>
    </section>
  )
}