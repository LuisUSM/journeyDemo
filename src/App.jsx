import { useState, useEffect } from 'react';
import './App.css';
import { Category } from './components/Category';
import { ProductsList } from './components/ProductList';
import { fetcher } from './hooks/fetcher';
import { StoreLogo } from './components/StoreLogo';

function App() {
  
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

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
      <header >
        <StoreLogo />
      </header>
      <section>
        <nav>
          { categories.errorMessage && <div>Error: { categories.errorMessage }</div> }
          { categories.data && <Category categories={ categories.data } handleOnCategoryClick={ handleOnCategoryClick }/> }
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