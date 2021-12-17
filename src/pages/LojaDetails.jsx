import {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import api from '../services/api';
import styled from 'styled-components';

const LojaDetails = () => {
  const params = useParams();
  const {id} = params;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLojaDetails = async () => {
      const data = await api.get(`/${id}`,{
        headers: {
          ContentType: 'application/json',
        },
      })
        .then(response => response.data)
        .catch(err => console.log(err));
      setDetails(data);
      setLoading(false);
    }

    getLojaDetails();
  },[id]);

  const {nome, enderecos, logo} = details;
  
  if(loading) {
    return (
      <div>
        <p>carregando... </p>
      </div>
    )
  }
  return(
    <div>
      <h1>{nome}</h1>
      <img src={logo} alt="logo da loja" style={{width: 150}}/>
      <ul>
        {
          enderecos.map((endereco, index) => {
            const {text, lat, long} = endereco;
            return <li key={index}>{text} lat: {lat} long: {long}</li>
          })
        }
      </ul>
      <Link to="/lojas">
        <Button>Voltar</Button>
      </Link>
    </div>
  )
};

export default LojaDetails;

const Button = styled.button`
  border-radius: 5px;
  background: transparent;
  color: red;
  box-shadow: 1px 1px 1px red;
  margin: 5px;
`