import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>    
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="../index.html">Home</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../pages/productos.html">Productos</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../pages/preguntas_frecuentes.html">Preguntas Frecuentes</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" href="../pages/contacto.html">Contacto</a>
                    </li>
                    
                    </ul>    

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0m"> 
                    
                    </ul>      

                </div>
                </div>
            </nav>            
            
        )
    }
}


