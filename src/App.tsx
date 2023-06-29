import 'normalize.css'
import './App.css'

import Sun from '../src/assets/img/sun.svg';
import Moon from '../src/assets/img/moon.svg';
import SearchWhite from '../src/assets/img/searchWhite.svg';
import SearchBlack from '../src/assets/img/searchBlack.svg';

import { Header } from './components/Header'
import { useState } from 'react'
import { Apis } from './components/Main';
import { Search } from './components/Search';

function App() {
  const [mode, setMode] = useState(false);

  const handleClickMode = () =>{
    if(mode){
    setMode(false);
    }else{
    setMode(true)
  }
  }

  return (
    <>
      <Header 
        textMode={mode?'Light Mode' : 'Dark Mode'} 
        mode={mode?'darkmode':''} 
        onClickMode={handleClickMode}
        imgMode={mode?Sun:Moon}
        altMode={mode?'Sun':'Moon'}
        textDarkMode={mode?'text_DarkMode':''}
      />
      <div className={mode?'mainblack': 'main'}>
        <Search 
          darkMode={mode?'darkModeInputs':''}
          imgSearch={mode?SearchWhite:SearchBlack} 
          altSearch={mode?'search white': 'search black'}
        />
        <Apis darkMode={mode? 'darkModeInputs': ''} />
      </div>
      
    </>
  )
}

export default App
