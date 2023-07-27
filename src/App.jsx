import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Address,
  CartPage,
  Checkout,
  ErrorPage,
  Home,
  LoginPage,
  // Order,
  ProductListingPage,
  Profile,
  SharedLayout,
  SharedProfileLayout,
  SignupPage,
  SingleProductPage,  
  WishListPage, 
  
  
 
  
} from './frontend/pages';
import AboutUsPage from './frontend/pages/AboutUsPage';
import HowWeDo from './frontend/pages/HowWeDo';
import Blog1 from "./frontend/pages/Blog1/Blog1"
import Blog2 from "./frontend/pages/Blog2/Blog2"
import Blog3 from "./frontend/pages/Blog3/Blog3"


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './frontend/components';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <ToastContainer
          position='bottom-left'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />

        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/howdo' element={<HowWeDo />} />
          <Route path='/blog1' element={<Blog1 />} />
          <Route path='/blog2' element={<Blog2 />} />
          <Route path='/blog3' element={<Blog3 />} />
          
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<ProductListingPage />} />
            <Route path='products/:productId' element={<SingleProductPage />} />
            

            <Route
              path='cart'
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />

            <Route
              path='wishlist'
              element={
                <PrivateRoute>
                  <WishListPage />
                </PrivateRoute>
              }
            />

            <Route
              path='checkout'
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />

            <Route
              path='profile'
              element={
                <PrivateRoute>
                  <SharedProfileLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Profile />} />
              <Route path='address' element={<Address />} />
              {/* <Route path='order' element={<Order />} /> */}
            </Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
