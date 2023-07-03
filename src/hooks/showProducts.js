import { useState } from "react";

const BASE_URL ="http://localhost:3000/products?catId=";

export const showProducts = () =>
{
    const [products, setProducts] = useState( [
        {
            id: -1,
            title: 'Welcome! Choose a category to see all the products we have to offer to you!'
        }
    ] );

    const handleOnCategoryClick = selectedCategory =>
    {
        fetch(`${BASE_URL}${ selectedCategory }`)
        .then(response => response.json())
        .then(products => {
            setProducts(products);
        });
    }

    return {
        handleOnCategoryClick,
        products
    }
}

