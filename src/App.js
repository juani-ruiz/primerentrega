import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';

function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">  

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     
      </button>    
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="">Home</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Productos</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Preguntas Frecuentes</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="">Contacto</a>
          </li>
        
        </ul>  
       
      </div>
    </div>
  </nav>



  );
}

export default App;
