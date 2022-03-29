import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ProductList } from './ProductList';
import { ProductDetail } from './ProductDetail';

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/">
            {/* <SearchBar /> */}
            <ProductList />
          </Route>
          <Route path="/detail/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
