import { useState, useEffect } from 'react';
import './App.css';
import { Category } from './components/Category';
import { showProducts } from './hooks/showProducts';
import { ProductsList } from './components/ProductList';
import { fetcher } from './hooks/fetcher';

function App() {

  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const { handleOnCategoryClick, products } = showProducts([]);

  //Here, we are getting the info. contained within the JSON file we created.
  useEffect(() => {
    const fetchData = async () =>
    {
      const responseObject = await fetcher('/categories');
      setCategories(responseObject);
    }
    fetchData();
  
  }, []);

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
          <ProductsList products={ products }/>
        </article>
      </section>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;