import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes,
Link,
Switch,
BrowserRouter} from "react-router-dom";
import India from "./components/India";
import World from "./components/World";

import Header from './components/Header';


function App() {
  return (
    <div className="container-fluid">
     <BrowserRouter>
  
     <Header></Header>

     <Routes>
                <Route exact path="/" element={<India />} />
                <Route path="/india" element={<India />} />
                <Route path="/world" element={<World />}/>
                </Routes>
   
     </BrowserRouter>
 
    </div>
  );
}

export default App;
