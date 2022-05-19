import { Switch ,Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartContextProvider from './context/CartContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import ProductDetails from './pages/ProductDetails';
import Products from "./pages/Products";
import ShopCart from './pages/ShopCart';

const App = () => {
  
  return (
    <ProductsContextProvider>
      <CartContextProvider>
          <Navbar />
          <main className='bg-gray-100 min-h-screen pt-20'>
            <Switch>
              <Route path='/cart' component={ShopCart} />
              <Route path='/products/:id' component={ProductDetails} />
              <Route path='/products' component={Products} />
              <Redirect to='/products' />
            </Switch>
          </main>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
