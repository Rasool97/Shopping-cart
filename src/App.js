import { Switch ,Route, Redirect } from 'react-router-dom';
import Products from "./pages/Products";

const App = () => {
  return (
    <div >
      <Switch>
        <Route path='/products' component={Products} />
        <Redirect to='/products' />
      </Switch>
    </div>
  );
}

export default App;
