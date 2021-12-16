import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
        <Button type='button'>Details</Button>
      </Link>
    </div>
  )
}

export default Loja;

const Button = styled.button`
  background: darkBlue;
  border-radius: 5px;
  box-shadow: 0px 0px 8px cyan;
  color: red;
  margin: 5px;
`