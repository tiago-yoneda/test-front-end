import {Link} from 'react-router-dom';

const Loja = (props) => {
  const {id, nome, logo, logo_transparent,categorias} = props.loja;

  return(
    <div>
      <img src={logo} alt="logotipo da loja" style={{width: 150, height: 'auto'}} />
      <img src={logo_transparent} alt="logotipo da loja" style={{width: 150, height: 'auto'}} />
      <h4>{nome}</h4>
      <h3>Categorias</h3>
      <ul>
        {
          categorias.map((categoria, index) => <li key={index}>{categoria}</li>)
        }
      </ul>
      <Link to={`/lojas/${id}`}>
        <button type='button'>Details</button>
      </Link>
    </div>
  )
}

export default Loja;
