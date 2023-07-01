import 'normalize.css';
import '../styles/main.css'
import '../App.css';

import Sun from '../assets/img/sun.svg';
import Moon from '../assets/img/moon.svg';
import SearchWhite from '../assets/img/searchWhite.svg';
import SearchBlack from '../assets/img/searchBlack.svg';

import { Header } from '../components/Header'
import { useState } from 'react'
import { Search } from '../components/Search';
import { Card } from '../components/Card';

import data from '../api/data.json';

export const HomePage: React.FC = () =>{
  // dark mode
  const [mode, setMode] = useState<boolean>(false);
  // Datos
  const [filterValue, setFilterValue] = useState('');


  const handleClickMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true)
    }
  }

  const handleOnChangeInput= (e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setFilterValue(value);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()));
  }

  return(
    <>
      <Header
        textMode={mode ? 'Light Mode' : 'Dark Mode'}
        mode={mode ? 'darkmode' : ''}
        onClickMode={handleClickMode}
        imgMode={mode ? Sun : Moon}
        altMode={mode ? 'Sun' : 'Moon'}
        textDarkMode={mode ? 'text_DarkMode' : ''}
      />
      <div className={mode ? 'mainblack' : 'main'}>
        <Search
          onChangeInput={handleOnChangeInput}
          value={filterValue}
          darkMode={mode ? 'darkModeInputs' : ''}
          imgSearch={mode ? SearchWhite : SearchBlack}
          altSearch={mode ? 'search white' : 'search black'}
        />

        <main className="apis">
          <div className="container container-order">
            {data.map((item, index) => (
              <Card
                key={index}
                imgCard={item.flag}
                altImgCard={item.name}
                nameCountry={item.name}
                numberPeople={item.population}
                region={item.region}
                capital={item.capital}
                darkMode={mode ? 'darkModeInputs' : ''}
              />
            ))}
          </div>
        </main>
      </div>

    </>
)
}