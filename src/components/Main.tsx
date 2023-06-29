import data from '../../data.json';
import '../styles/main.css'
import { Card } from './Card';

interface PorpsApis {
  darkMode: string;
}


export const Apis: React.FC<PorpsApis> = ({ darkMode }) =>{

  return(
    <>
      <main className="apis">
        <div className="container container-order">
          {data.map((item, index) => (
            <Card
              key={index}
              imgCard={item.flag}
              altImgCard=''
              nameCountry={item.name}
              numberPeople={item.population}
              region={item.region}
              capital={item.capital}
              darkMode={darkMode}
            />
          ))}
        </div>
      </main>
    </>
)
}