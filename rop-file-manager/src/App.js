import './App.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginPage,MainPage} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/main" component={MainPage}/>
          <Route exact path="/"><Redirect to="/login"/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
