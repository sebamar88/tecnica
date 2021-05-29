import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path='/' component={Home}/>
        <Route exact path='/proyectos' component={Projects}/>
        <Route exact path='/contacto' component={Contact}/>        
      </Switch> 
    </Router>
    
  );
}

export default App;
