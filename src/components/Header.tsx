import '../styles/header.css'
interface PropsHeader {
  mode: string;
  textMode: string;
  imgMode: string;
  altMode: string;
  textDarkMode: string
  onClickMode: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Header: React.FC<PropsHeader> = ({ 
    onClickMode, 
    mode, 
    textMode, 
    imgMode, 
    altMode,
    textDarkMode
  }) => {
  return (
    <>
      <div className={`header ${mode}`}>
        <div className="contenedorTop container">
          <div>
            <h1 className={`header_titulo ${textDarkMode}`}>Where in the world?</h1>
          </div>
          <div onClick={onClickMode} className="header_btnDarkMode">
            <img className='btnDarkMode_img' src={imgMode} alt={altMode} />
            <h4 className={`btnDarkMode_texto ${textDarkMode}`}>{textMode}</h4>
          </div>
        </div>
      </div>
    </>
  )
}