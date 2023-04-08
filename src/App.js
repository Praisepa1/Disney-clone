import { BrowserRouter as Router,Routes,Route,  useRoutes, } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Login/>},
      {path:'/home',element:<Home/>},
      {path:'/Detail/:id',element:<Detail/>}
    ]
  )
  return routes;
}

function App() {
  return (
    <div className="App">
   
        <Router>
         <Header />
          <AppRoutes />
        </Router>
 
    </div>
  );
}

export default App;

  