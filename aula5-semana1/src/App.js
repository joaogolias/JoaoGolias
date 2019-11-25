import React from 'react';
import './App.css';

function ImprimeOi(event) {
    console.log(event)
}

function App() {
    const primeiroTexto = "asdasd"
    const segundoTexto = primeiroTexto
    return(
        <div>
            <div onClick={ ImprimeOi } className="div-generica" id="primeira-div">
                { "ME CLIQUE 2" }
            </div>
        </div>

    )
}

export default App;