import '../stylesheet/App.css';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
// import { SearchBar } from './SearchBar';
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
    </>
  );
}

export default App;
