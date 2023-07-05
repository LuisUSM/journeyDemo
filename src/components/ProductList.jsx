import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryProduct } from "./CategoryProduct";
import { StoreLogo } from "./StoreLogo";
import { fetcher } from "../hooks/fetcher";

//This component retrieves and renders all the products for the corresponding category in their own page.

export const ProductList = () => {

    const [{ errorMessage, data }, setProducts] = useState({ errorMessage: '', data: [] });

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async (id) =>
        {
            const responseObject = await fetcher(`http://localhost:3000/products?catId=${id}`);
            setProducts(responseObject);
        }
        fetchData(categoryId);
    
    }, [categoryId])

    return (
        <>
            <StoreLogo/>
            { errorMessage && <div>Error: { errorMessage }</div> }
            { data && data.map( p => ( <CategoryProduct key={p.id} {...p} /> )) }
        </>
    )
}
