import {useState, useEffect} from 'react';
import Loja from '../components/Loja';
import api from '../services/api';
import styled from 'styled-components';

const Lojas = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const myData = await api.get('',{
      headers: {
        ContentType: 'application/json',
      },
    })
      .then(response => response.data)
      .catch(err => console.log(err));
    setData(myData);
    setLoading(false);
  }

  const handleClick = () => {
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading) {
    return (
      <div>
        <p>carregando... </p>
      </div>
    )
  }

  return (
    <div style={{backgroundColor: "black", color:'white'}}>
      {
        data.map((loja, index) => <Loja key={index} loja={loja} />)
      }
      <Button onClick={handleClick}>Aperte aqui para listar as lojas no console</Button>
    </div>
  );
}

export default Lojas;

const Button = styled.button`
  border-radius: 5px;
  background: transparent;
  color: red;
  box-shadow: 1px 1px 1px red;
  margin: 5px;
`