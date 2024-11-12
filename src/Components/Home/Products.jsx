import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function Products() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')

  useEffect(()=> {
    fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/getFlyerData.php')
    .then(res => { 
      if(!res.ok) 
        throw error('Error al traer datos')
      
      return res.json()
    })
    .then(data => setData(data))

    fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/getTitles.php')
    .then(res => { 
      if(!res.ok) 
        throw error('Error al traer datos')
      
      return res.json()
    })
    .then(data => {
      setTitle(data[1].TITLE)
      setTitle2(data[2].TITLE)
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
        <div className="w-full flex flex-col justify-center items-center">
          <span className="underline font-bold text-white sm:text-xl max-w-[85%] text-center -tracking-wider">{title && title}</span>
          <span className="underline font-bold text-white sm:text-xl max-w-[85%] text-center -tracking-wider">{title2 && title2}</span>
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

