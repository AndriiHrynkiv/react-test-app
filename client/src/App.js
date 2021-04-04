import logo from './logo.svg';
import './App.css';
import {Routes} from './routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const routes = Routes(false);
  return (
    <BrowserRouter>
        {routes}
   </BrowserRouter>
  )
}

export default App;
