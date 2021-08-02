import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import Footer from './components/Home/Footer';
import Cards from './components/Home/Cards';


function App() {
  return (
    <Router>
      <Route path="/" component={HomePage}/>
      <Cards />
      <Footer />
    </Router>
  );
}
export default App;
