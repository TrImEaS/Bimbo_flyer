import ProductCard from "./ProductCard"
import data from "../../Data/flyer_data.json"

export default function Products() {
  const firstRow = data.products.slice(0, 2)
  const secondRow = data.products.slice(2, 4)
  const thirdRow = data.products.slice(4, 6)
  const fourthRow = data.products.slice(6, 8)

  return(
    <section className="flex flex-col w-full h-full min-h-[700px]">
      <article 
        className={`flex w-full justify-center gap-x-72 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center first-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[0].fila_productos_1}`,
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
        className={`flex w-full justify-center gap-x-72 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center second-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[0].fila_productos_2}`,
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
        className={`flex w-full justify-center gap-x-72 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center third-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[0].fila_productos_3}`,
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
        className={`flex w-full justify-center gap-x-72 max-xl:gap-x-0 max-xl:justify-around min-h-[400px] h-full items-center fourth-row-img z-10`}
        style={{ 
          backgroundColor: `#${data.bg_colors[0].fila_productos_4}`,
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