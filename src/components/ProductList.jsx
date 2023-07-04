import { CategoryProduct } from "./CategoryProduct"

export const ProductsList = ({ products }) => {

    return (
        <>
            {
                products.map( p => (
                    <CategoryProduct key={p.id} {...p}/>
                ))
            }
        </>
    )
}
