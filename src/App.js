import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './App.css';
import RecentTx from './components/Transaction';
import Navbar from './components/Navbar';
import Users from './Pages/Users';


function App() {
 
  return (
     <Router>
     <Navbar/>
     <Switch>
       <Route path='/users' component='Users'/>
     </Switch>
     </Router>
  );
}

export default App;
