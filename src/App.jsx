import { useState, useEffect } from 'react';
import './App.css';
import { StoreLogo } from './components/StoreLogo';
import { Category } from './components/Category';
import { fetcher } from './hooks/fetcher';

//The unique business of this category is rendering the categories. That's it!

function App() {
  
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });

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
          { categories.errorMessage && <div>Error: { categories.errorMessage }</div> }
          { categories.data && <Category categories={ categories.data }/> }
        </nav>
      </section>

      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;