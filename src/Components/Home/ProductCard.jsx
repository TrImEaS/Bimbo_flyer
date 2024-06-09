export default function ProductCard({ product }) {
  return(
    <section className="relative bg-[#fafafa] rounded-xl border-2 flex flex-col h-[300px] w-[400px] p-5">
      <article className="flex flex-col h-full w-full max-h-[198px] justify-between">
        <span className="text-red-500 text-lg font-bold">{product.marca}</span>
        <span className="text-base font-bold">{product.descripcion}</span>
        <img 
          className="h-full w-full object-fill" 
          src={`https://technologyline.com.ar/others/Images/Products-Images/product-${product.id}.jpg`}/>      
      </article>

      <article className='absolute right-[-20px] flex justify-center top-[-20px]'>
        <span className='absolute z-10 left-[17px] text-[21px] font-extrabold text-shadow'>
          OFERTA
        </span>
        <img 
          className='h-[80px] w-[135px] yellow-filter' 
          src={'https://technologyline.com.ar/others/Images/priceImg.png'}/>
        <span className="absolute text-3xl top-6 font-semibold">${product.precio}</span>
      </article>
    </section>
  )
}