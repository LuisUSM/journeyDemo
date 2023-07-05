import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

export const CategoryProduct = ({id, title, image, specs, features, price, stock}) => {

    //The method "useNavigate" allows us to assign quickly a reference path to an element. This can be use, for example, for a button.
    const navigate = useNavigate();

    return (
        <ProductInfoArticle>
            <ProductTitle>
                <Link to={`../products/${id}`}>{title}</Link>
            </ProductTitle>

            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={`../assets/${image}`} alt={title} />
                </ProductImageContainer>
            </figure>

            <aside>
                <ProductInfo>
                    <ProductInfoHeader>Dimensions</ProductInfoHeader>
                    <label>{specs.dimensions}</label>
                </ProductInfo>

                {specs.capacity &&
                    <ProductInfo>
                        <ProductInfoHeader>Capacity</ProductInfoHeader>
                        <label>{specs.capacity}</label>
                    </ProductInfo>
                }

                <ProductInfo>
                    <ProductInfoHeader>Features</ProductInfoHeader>
                    <ul>
                        {features?.map((f, index) =>
                        {
                            return <ProductInfoListItem key={`feature${index}`}>{f}</ProductInfoListItem>
                        })}
                    </ul>
                </ProductInfo>
            </aside>

            <aside className="category-product-finance">
                <ProductInfoFinancePrice>
                    &#36;{price}
                </ProductInfoFinancePrice>

                <ProductInfoStock>
                    <ProductInfoStockLabel>Stock level: {stock}</ProductInfoStockLabel>
                    <ProductInfoStockLabel>FREE DELIVERY</ProductInfoStockLabel>
                </ProductInfoStock>

                <ProductInfoAction>
                    <ProductInfoActionButton onClick={() => navigate(`products/${id}`)}>View product</ProductInfoActionButton>
                    <ProductInfoActionButton>Add to basket</ProductInfoActionButton>
                </ProductInfoAction>
            </aside>
        </ProductInfoArticle>
    );
}

//"styled-components" library for React. It allows us to stylize HTML components with CSS3 code inside JS Templates, and rename them to be used wherever we want. All in the same file!
//To install this library, we have to write the next command:
//npm install styled-components
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
    width: 40%;
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
