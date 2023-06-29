import '../styles/card.css'

interface PropsCard {
  imgCard: string;
  altImgCard: string;
  nameCountry: string;
  numberPeople: number;
  region: string;
  capital: string | undefined;
  darkMode: string;
}

export const Card: React.FC<PropsCard> = ({
  imgCard,
  altImgCard,
  nameCountry,
  numberPeople,
  region,
  capital,
  darkMode
}) => {
  return (
    <>
      <div className={`card sombra ${darkMode}`}>
        <div className="card_img">
          <img src={imgCard} alt={altImgCard} />
        </div>
        <div className="card_info">
          <h3 className="info_name">{nameCountry}</h3>
          <p className='info_title'>Population: <span className='info_data'>{numberPeople}</span></p>
          <p className='info_title'>Region: <span className='info_data'>{region}</span></p>
          <p className='info_title'>Capital: <span className='info_data'>{capital}</span></p>
        </div>
      </div>
    </>
  )
}