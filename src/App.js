import './App.css';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./Components/Map";
import News from "./Components/News";
import History from "./Components/History";
import Report from "./Components/Report";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* Home still needs to be created. */}
            <Route path='/' element={ <Map /> }></Route>
            <Route path='/news' element={ <News /> }></Route>
            <Route path='/history' element={ <History /> }></Route>
            <Route path='/report' element={ <Report /> }></Route>
          </Routes>
        </Router>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
