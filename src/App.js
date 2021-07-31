import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderForm from './pages/orderForm/orderForm';
import './App.css';
// import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
     
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />  
      <Switch>
        <Route path="/orderForm">
          <Hero />
          <OrderForm />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
