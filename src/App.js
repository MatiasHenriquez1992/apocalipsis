import './App.css';
import IndexPage from './Pages/IndexPage/IndexPage.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Servicios from './Pages/Servicios/Servicios.js';


function App() {


  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/servicios' component={Servicios}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
