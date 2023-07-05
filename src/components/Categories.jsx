import { Link } from 'react-router-dom';
import '../styles.css';

//The business of this component is to map all the categories to be rendered by App.jsx component. Also, it creates links in each category. When clicked, they send you to the corresponding ProductList.jsx component that shows the products for that category.

export const Categories = ({ categories }) => {

    return (
        <ul>
            { 
                categories.map( (c, index) => (
                <Link key={ index } to={`categories/${c.id}`}>
                    <div className='categories' key={ c.id }>
                        {c.title}
                    </div>
                </Link>
            ))
            }
        </ul>
    );
}
