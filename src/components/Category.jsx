import '../styles.css';
//REMEMBER => '../' means "Go to the parent directory".

export const Category = ({ categories, handleOnCategoryClick }) => {

    return (
        <ul>
            { 
                categories.map( category => (
                <div className='categories' key={ category.id } onClick={ () => handleOnCategoryClick(category.id) }>{ category.title }</div>
            ))
            }
        </ul>
    )
}
