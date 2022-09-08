import './App.css';
import IndexPage from './Pages/IndexPage/IndexPage.js';
import Servicios from './Pages/Servicios/Servicios';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Productos from './Pages/Productos/Productos';



function App() {


  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/servicios' element={<Servicios />}/>
          <Route path='/productos' element={<Productos />}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
