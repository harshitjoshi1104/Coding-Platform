
import './searchBar.css'

const SearchBar=props=>{
    return (
        <div className="search-bar">
            <button>List  <span class="material-symbols-outlined">expand_more</span></button>
            <button>Difficulty  <span class="material-symbols-outlined">expand_more</span></button>
            <button>Status  <span class="material-symbols-outlined">expand_more</span></button>
            <button>Tags  <span class="material-symbols-outlined">expand_more</span></button>
            <input placeholder='🔎 Search questions...' ></input>
            <button><span class="material-symbols-outlined">settings</span></button>

        </div>
    )
}

export default SearchBar;