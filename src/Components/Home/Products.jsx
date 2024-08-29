import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function Products() {
  const [data, setData] = useState([])

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
      setData(data)
    })
  },[])

  if(data.length === 0) {
    return ( <></> )
  }

  const firstRow = data.products.slice(0, 2)
  const secondRow = data.products.slice(2, 4)
  const thirdRow = data.products.slice(4, 6)
  const fourthRow = data.products.slice(6, 8)

  return(
    <section 
      className="flex flex-col w-full items-center max-lg:w-full h-full min-h-[700px] bg-white"
      style={{ 
        // backgroundImage: `url("https://i.pinimg.com/originals/d8/f3/03/d8f303294c3a00e42f9c0e0217de2ad6.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >

      <article 
        className={`flex w-3/4 max-md:w-full max-[1200px]:w-full justify-center flex-col pt-5 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] max-sm:min-h-[200px] h-full items-center z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[0].color}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex justify-center items-center">
          <h2 className="underline font-bold text-white sm:text-xl">PRODUCTOS DESTACADOS LISTA MINORISTA</h2>
        </div>
        
        <div className={`flex w-full max-[1200px]:w-full justify-center gap-x-20 gap-y-14 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] max-sm:min-h-[200px] h-full items-center first-row-img z-10 sm:pt-10`}>
          {firstRow.map(product => (
            <ProductCard 
              key={product.id}
              product={product}/>
          ))}
        </div>
        </article>

      <article 
        className={`flex w-3/4 max-md:w-full max-[1200px]:w-full justify-center gap-x-20 gap-y-14 sm:py-12 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] max-sm:min-h-[200px] h-full items-center second-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[1].color}`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {secondRow.map(product => (
          <ProductCard 
            key={product.id}
            product={product}/>
        ))}
      </article>

      <article 
        className={`flex w-3/4 max-md:w-full max-[1200px]:w-full justify-center gap-x-20 gap-y-14 sm:py-12 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] max-sm:min-h-[200px] h-full items-center third-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[2].color}`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        {thirdRow.map(product => (
          <ProductCard 
            key={product.id}
            product={product}/>
        ))}
      </article>

      <article 
        className={`flex w-3/4 max-md:w-full max-[1200px]:w-full justify-center gap-x-20 gap-y-14 sm:py-12 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] max-sm:min-h-[200px] h-full items-center fourth-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[3].color}`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        {fourthRow.map(product => (
          <ProductCard 
            key={product.id}
            product={product}/>
        ))}
      </article>
    </section>
  )
}

