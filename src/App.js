import './App.css';
import NavBar from './componentes/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <NavBar> 
      </NavBar>
      <ItemListContainer greeting={'Bienvenidos al ItemListContainer!'}>
      </ItemListContainer>
    </div>
  );
}

export default App;
