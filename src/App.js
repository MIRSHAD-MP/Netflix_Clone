import React from 'react'
import {originals,action,comdey,horror,romance,documentaries} from './urls'
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
             <NavBar />
             <Banner />
             <RowPost url={originals} title = 'Netflix Originals' />
             <RowPost url={action} title = 'Action' isSmall />
             <RowPost url={comdey} title = 'Comedy' isSmall />
             <RowPost url={horror} title = 'Horror' isSmall />
             <RowPost url={romance} title = 'Romance' isSmall />
             <RowPost url={documentaries} title = 'Documentaries' isSmall />

    </div>
  );
}

export default App;
