import { useState, useEffect } from 'react';
import './App.css';
import { Category } from './components/Category';
import { ProductsList } from './components/ProductList';
import { fetcher } from './hooks/fetcher';

function App() {

  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [{ 
    id: -1,
    catId: 0,
    title: 'Ahoy! Get in a voyage through the waters of Offers Sea we have for you!'
  }] });

  //Here, we are getting the info. contained within the JSON file we created.
  useEffect(() => {
    const fetchData = async () =>
    {
      const responseObject = await fetcher('http://localhost:3000/categories');
      setCategories(responseObject);
    }
    fetchData();
  
  }, []);

  const handleOnCategoryClick = (id) =>
  {
      const fetchData = async () =>
      {
        const responseObject = await fetcher(`http://localhost:3000/products?catId=${id}`);
        setProducts(responseObject);
      }
      fetchData();
  }

  return (
    <>
      <header>
        My Store
      </header>
      <section>
        <nav>
          { categories.errorMessage && <div>Error: { categories.errorMessage }</div> }
          { categories.data && <Category categories={ categories.data } getCategories={ handleOnCategoryClick }/> }
        </nav>
        <article>
          <h1>Products</h1>
          { products.errorMessage && <div>Error: { products.errorMessage }</div> }
          { products.data && <ProductsList products={ products.data }/> }
        </article>
      </section>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;