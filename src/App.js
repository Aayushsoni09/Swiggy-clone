import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Error from './components/Error';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
function App() {

  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        
          <Route path="/" element={<Body/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="*" element={<Error/>}/>
          <Route path="/restaurant/:id" element={<RestaurantMenu/>} />
        </Routes>
    </div>
    </Router>
   
  );
}
export default App;
