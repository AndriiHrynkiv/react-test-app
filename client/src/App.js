import logo from './logo.svg';
import './App.css';
import {UseRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const routes = UseRoutes(false);
  return (
    <BrowserRouter>
      {routes}
   </BrowserRouter>
  )
}

export default App;
