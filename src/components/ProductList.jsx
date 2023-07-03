export const ProductsList = ({ products }) => {

    return (
        <>
            {
                products.map( product => (
                    <div key={ product.id }>{ product.title }</div>
                ))
            }
        </>
    )
}
