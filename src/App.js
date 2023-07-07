import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Importation de react-router-dom pour gérer notre routeur et
//permettre la navigation dans le projet
import MainMenu from './components/MainMenu';
import FizzBuzz from './components/FizzBuzz';
import Conway from './components/Conway';
//import des composants suivant : le menu pour choisir un exercice et les exercices

function App() {
  return (
    <div className='App'>
      {/* Mis en place du routeur */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/fizzbuzz' element={<FizzBuzz />} />
          <Route path='/conway' element={<Conway />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
