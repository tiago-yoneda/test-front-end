import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import api from '../services/api';


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
          enderecos.map((endereco, index) => <li key={index}>{endereco.text} geo: {endereco.geo}</li>)
        }
      </ul>
    </div>
  )
};

export default LojaDetails;