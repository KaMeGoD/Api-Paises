import '../styles/search.css'

interface PropsSearch{
  imgSearch: string;
  altSearch: string;
  darkMode: string;
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Search: React.FC<PropsSearch> = ({ imgSearch, altSearch, darkMode,value, onChangeInput, onChangeSelect }) =>{
  return(
    <>
      <div className="search-container container">
        <div className={`search-input sombra ${darkMode}`}>
          <img className={`search-img ${darkMode}`} src={imgSearch} alt={altSearch} />
          <input onChange={onChangeInput} value={value} type="search" className={`inputs ${darkMode}`} placeholder='Search for a country...'/>
        </div>
        <div className={`search-filters sombra ${darkMode}`}>
          <select onChange={onChangeSelect} className={`inputs ${darkMode}`} name="filter" id="filter">
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