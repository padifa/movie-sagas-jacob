import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Details} />
      </Router>
    </div>
  );
}

export default App;
