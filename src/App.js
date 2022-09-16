import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import SingelpostPage from './pages/singelPostPage';

function App() {
  const [data,setData] = useState(null)
  
  async function getPosts (){
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    setData(json);
  }


  useEffect(() => {
    getPosts()
  },[])
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home data={data} />}></Route>
      <Route path="/post/:id" element={<SingelpostPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
