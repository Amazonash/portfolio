import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
   <Router>
     <div>
       <Header>

       </Header>
       <Route exact path="/home" component={Home}>
      </Route>
      <Route exact path="/portfolio" component={Portfolio}>
      </Route>
      <Footer>

      </Footer>

 
     </div>
   </Router>
  );
}

export default App;
