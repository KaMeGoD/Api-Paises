import '../styles/search.css'

interface PropsSearch{
  imgSearch: string;
  altSearch: string;
  darkMode: string;
}

export const Search: React.FC<PropsSearch> = ({ imgSearch, altSearch, darkMode }) =>{
  return(
    <>
      <div className="search-container container">
        <div className={`search-input sombra ${darkMode}`}>
          <img className={`search-img ${darkMode}`} src={imgSearch} alt={altSearch} />
          <input type="text" className={`inputs ${darkMode}`} placeholder='Search for a country...'/>
        </div>
        <div className={`search-filters sombra ${darkMode}`}>
          <select className={`inputs ${darkMode}`} name="filter" id="filter">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
)
}