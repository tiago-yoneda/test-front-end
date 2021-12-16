import {Link} from 'react-router-dom';
import start from '../assets/start.jpg'
const Landing = () => {
  return(
    <div>
      <p>Landing Page Test</p>
      <Link to="/lojas">
        <img src={start} alt="green start button" style={{width: 200}}/>
      </Link>
    </div>
  )
}

export default Landing;
