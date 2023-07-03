import '../styles.css';
//REMEMBER => '../' means "Go to the parent directory".

export const Category = ({ categories, getCategories }) => {

    return (
        <>
            { 
                categories.map( category => (
                <div className='categories' key={ category.id } onClick={ () => getCategories(category.id) }>{ category.title }</div>
            ))
            }
        </>
    )
}
