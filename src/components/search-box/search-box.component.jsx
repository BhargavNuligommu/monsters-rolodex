
import './serach-box.style.css'

const SearchBox = ({onSearchChange}) => {

    return(
        <input className='search-box' 
        type='search'  
        placeholder='search monsters' 
        onChange={onSearchChange}>
        </input>
    )

}

export default SearchBox;