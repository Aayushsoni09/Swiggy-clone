import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Error from './components/Error';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux'
import {store} from "./utils/store"


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header/>
      <Routes>
        
          <Route path="/" element={<Body/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="*" element={<Error/>}/>
          <Route path="/restaurant/:id" element={<RestaurantMenu/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </div>
    </Router>
    </Provider>
  );
}
export default App;
