import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { UserProvider } from "./Contexts/UserContext";
import Route from './Routers/route';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
       <Route/>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;

