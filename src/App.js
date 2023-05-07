import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Component/Signin';
import SignUp from './Component/SignUp';
import RecoverPassword from './Component/RecoverPassword';
import recoverEmail from './Component/recoverEmail';
import Inventory from './Component/Inventory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        < Route path='/SignUp' element={< SignUp />} />
        < Route path='/RecoverPassword' element={< RecoverPassword />} />
        < Route path='/recoverEmail' element={< recoverEmail />} />
        < Route path='/mytest' element={< Inventory />} />
      </Routes >
    </BrowserRouter >
  )
}

export default App;
