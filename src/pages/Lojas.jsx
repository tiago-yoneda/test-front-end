import {useState, useEffect} from 'react';
import Loja from '../components/Loja';
import api from '../services/api';

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
      <button onClick={handleClick}>Aperte aqui para listar as lojas no console</button>
    </div>
  );
}

export default Lojas;
