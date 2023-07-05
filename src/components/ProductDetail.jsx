import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StoreLogo } from "./StoreLogo";
import { fetcher } from "../hooks/fetcher";

export const ProductDetail = () => {

    const [{ data }, setProduct] = useState({ errorMessage: '', data: {} });

    //"useParams()" is a function that allow us to take parameters from the URL of the current web page. In this component, we use one of them to retrieve information from a product! The parameter that is taken from the URL, in this case, is ":productId".
    const { productId } = useParams();

    useEffect(() => {
        const fetchData = async (id) =>
        {
            //Our fake database, handled by JSON-Server, implements the "Rest Interface" so that we can send it a number and intuitively it will understand that it is an id, giving us the entry that matches that id.
            const responseObject = await fetcher(`http://localhost:3000/products/${id}`);
            setProduct(responseObject);
        }
        fetchData(productId);

    }, [productId]);

    //"dangerouslySetInnerHTML". Este prop nos permite ejecutar código HTML que se encuentre dentro del string de un componente. Más, para hacerlo, necesitamos declarar una función, en este caso llamada "createMarkup()" la cual almacenará el texto y ejecutará el código HTML que contenga.
    const createMarkup = () =>
    {
        return { __html: data?.description}
    };

    return (
        <>
            <StoreLogo />

            <ProductInfoArticle>

                <ProductTitle>
                    {data.title}
                </ProductTitle>

                <figure>
                    <ProductImageContainer>
                        <ProductImageContainerImage src={`../assets/${data.image}`} alt={data.title} />
                    </ProductImageContainer>
                </figure>

                <aside>
                    <ProductInfo>
                        <ProductInfoHeader>Dimensions</ProductInfoHeader>
                        <label>{data.dimensions}</label>
                    </ProductInfo>

                    {data.capacity &&
                        <ProductInfo>
                            <ProductInfoHeader>Capacity</ProductInfoHeader>
                            <label>{data.capacity}</label>
                        </ProductInfo>
                    }

                    <ProductInfo>
                        <ProductInfoHeader>Features</ProductInfoHeader>
                        <ul>
                            {data.features?.map((f, index) =>
                            {
                                return <ProductInfoListItem key={`feature${index}`}>{f}</ProductInfoListItem>
                            })}
                        </ul>
                    </ProductInfo>
                </aside>

                <aside className="category-product-finance">
                    <ProductInfoFinancePrice>
                        {/* "&#36" stands for the dollar symbol in HTML code */}
                        &#36;{data.price}
                    </ProductInfoFinancePrice>

                    <ProductInfoStock>
                        <ProductInfoStockLabel>Stock level: {data.stock}</ProductInfoStockLabel>
                        <ProductInfoStockLabel>FREE DELIVERY</ProductInfoStockLabel>
                    </ProductInfoStock>

                    <ProductInfoAction>
                        <ProductInfoActionButton>Add to basket</ProductInfoActionButton>
                    </ProductInfoAction>
                </aside>
                
                {/* Aquí es donde utilizamos el prop correspondiente. Como podemos observar, ya no es necesario colocar contenido en el elemento, esto debido a que el propio prop lo almacena*/}
                <ProductInfoDescription dangerouslySetInnerHTML={createMarkup()}></ProductInfoDescription>

            </ProductInfoArticle>
        </>
    );
}

const ProductInfoDescription = styled.div`
    grid-column: 1 / span 3;
`;

const ProductInfoArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    column-gap: 20px;
`;

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font.weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
    color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoStock = styled.div`
    padding-left: 10px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: lightgrey;
    height: 30%;
    width: 30%;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductInfoAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;

const ProductInfoFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`;
