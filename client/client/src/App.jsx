import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

const App = () => {
const [loaded, setLoaded] = useState(false);

    return(
      <div>
        <BrowserRouter>
          <Routes>
              <Route element={<Main loaded={loaded} setLoaded={setLoaded}/>} path="/products" default/>
              <Route element={<Detail/>} path="/products/:id"/>
              <Route element={<Update setLoaded={setLoaded}/>} path="/products/edit/:id"/>
          </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App;