import React from 'react';
import './ItemListContainer.css'

function MyComponent({greeting}) {
  return (
    <div className='container-itemlistcontainer'>
      <div>
        <h1>{greeting}</h1>
      </div>
      <div className='botones'>
        <button>Pc Armadas</button>
        <button>Componentes</button>
        <button>Perifericos</button>
      </div>
    </div>
  );
}

export default MyComponent;