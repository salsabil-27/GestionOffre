import React from 'react';
import Login from './pages/login.tsx';
import SideBar from './pages/navbar.tsx' ;
import ForgetPassword from './pages/forgetpassword.tsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
  
    <div>
      <SideBar /> 
      <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/forgetpassword" component={ForgetPassword} />
      </Switch>
    </BrowserRouter>
    </div>
 
   
    
  );
}

export default App;