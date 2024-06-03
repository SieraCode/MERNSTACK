import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Common/AboutComponent';
import NotFound from './Common/NotFoundComponent';
import UserHookComponent from './Application/User/UserHookComponent';
import ProductListing from './Application/Product/ProductListing';
import ProductComponent from './Application/Product/ProductContainer';
import ProductDetails from './Application/Product/ProductDetails';
import CartComponent from './Application/Cart/CartComponent';
import CartDetails from './Application/Cart/CartDetails';

export default class ApplicationComponent extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      name: 'Sie',
    };
  }

  updateName = (value) => {
    this.setState({
      name: value,
    });
  };

  render() {
    return (
      // BrowserRouter
      <Router>
        <div className="topdiv">
          <Header userName={this.state.name} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  parentName1={this.state.name}
                  updateNameInParent={this.updateName}
                />
              }
            />
            <Route
              path="home"
              element={
                <Home
                  parentName1={this.state.name}
                  updateNameInParent={this.updateName}
                />
              }
            />
            <Route path="user" element={<UserHookComponent />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<ProductListing />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="addProduct" element={<ProductComponent />} />
            <Route path="cart" element={<CartComponent />} />
            <Route path="viewCart" element={<CartDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}