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
      console.log(data)
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
    <section className="flex flex-col w-4/5 h-full min-h-[700px] bg-white">
      <article 
        className={`flex w-full justify-center gap-x-20 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center first-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[0].color}`,
          backgroundImage: "url('https://technologyline.com.ar/others/Images/Rows/fila-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {firstRow.map(product => (
          <ProductCard 
            key={product.id}
            product={product}/>
        ))}
      </article>

      <article 
        className={`flex w-full justify-center gap-x-20 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center second-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[1].color}`,
          backgroundImage: "url('https://technologyline.com.ar/others/Images/Rows/fila-2.jpg')",
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
        className={`flex w-full justify-center gap-x-20 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center third-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[2].color}`,
          backgroundImage: "url('https://technologyline.com.ar/others/Images/Rows/fila-3.jpg')",
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
        className={`flex w-full justify-center gap-x-20 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center fourth-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[3].color}`,
          backgroundImage: "url('https://technologyline.com.ar/others/Images/Rows/fila-4.jpg')",
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

