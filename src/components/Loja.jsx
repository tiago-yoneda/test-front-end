import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Loja = (props) => {
  const {id, nome, logo, logo_transparent,categorias} = props.loja;

  return(
    <div>
      <Image src={logo} alt="logotipo da loja" style={{width: 150, height: 'auto'}} />
      <Image src={logo_transparent} alt="logotipo da loja" style={{width: 150, height: 'auto'}} />
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
  box-shadow: 0px 0px 10px cyan;
  color: yellow;
  margin: 5px 0px 10px 30px;
  transition: 1.5s;

  &:hover {
    color: red;
    background: black;
    transform:scale(1.2);
    box-shadow: 0px 0px 15px red;
  }
`
const Image = styled.img`
  width: 150;
  height: auto;
  border-radius: 15px;

  &:hover {
    box-shadow: 0px 0px 10px magenta;
    border-radius: 15px;
  }
`