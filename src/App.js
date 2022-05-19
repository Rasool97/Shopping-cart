import { Switch ,Route, Redirect } from 'react-router-dom';
import ProductsContextProvider from './context/ProductsContextProvider';
import Products from "./pages/Products";
import ShopCart from './pages/ShopCart';

const App = () => {
  
  return (
    <ProductsContextProvider>
      <main className='bg-gray-100'>
        <Switch>
          <Route path='/cart' component={ShopCart} />
          <Route path='/products' component={Products} />
          <Redirect to='/products' />
        </Switch>
      </main>
    </ProductsContextProvider>
  );
}

export default App;
