// import { useEffect, useState } from "react";
import Lojas from './pages/Lojas';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import LojaDetails from './pages/LojaDetails';

function App() {
  return(
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/lojas' element={<Lojas />} />
      <Route exact path='/lojas/:id' element={<LojaDetails />}/>
    </Routes>
  )
}

export default App;
