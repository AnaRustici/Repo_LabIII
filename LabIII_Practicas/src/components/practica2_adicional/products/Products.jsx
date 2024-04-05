import Product from "../product/Product"

const Products = ({products}) => {
    const mappedProducts = products.map((p, index) => <Product key={index} name={p}></Product>)
  return (
    <div>
        <h4>Ejercicio 1</h4>
        {mappedProducts}
    </div>
  )
}

export default Products