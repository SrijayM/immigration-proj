import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import {Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import New from './components/New';
import Edit from './components/Edit';

function App() {

  const [immigrate, setImmigrate] = useState();

  const getImmigrate = async () =>{

    try{
      const response = await api.get("/api/v1/immigrates")
      console.log(response.data);
      setImmigrate(response.data);
      
    }catch(err){
      console.log(err);
    }

  }


  
  useEffect(() => {
    getImmigrate();
  }, [])
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home immigrate={immigrate}/>}/>
          <Route path="/new" element={<New immigrate={immigrate}/>}/>
          <Route path="/edit" element={<Edit immigrate={immigrate}/>}/>
        </Route>
      </Routes>
        
    </div>
  );
}

export default App;
