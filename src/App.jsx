import { useState, useEffect } from 'react';
import './App.css';
import { StoreLogo } from './components/StoreLogo';
import { Categories } from './components/Categories';
import { fetcher } from './hooks/fetcher';

//The unique business of this category is rendering the categories. That's it!

const App = () => {
  
  const [{ errorMessage, data }, setCategories] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () =>
    {
      const responseObject = await fetcher('http://localhost:3000/categories');
      setCategories(responseObject);
    }
    fetchData();
  
  }, []);

  return (
    <>
      <header >
        <StoreLogo />
      </header>

      <section>
        <nav>
          { errorMessage && <div>Error: { errorMessage }</div> }
          { data && <Categories categories={ data }/> }
        </nav>
      </section>

      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;