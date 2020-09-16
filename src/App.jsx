import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import  CustomNavbar from './components/layout/CustomNavbar';
import AddProduct from './components/layout/AddProduct'
import AddCustomer from './components/layout/AddCustomer';



class App extends Component {
  render () {
    return (
     <Router>
       <CustomNavbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/addproduct' component={AddProduct} />
          <Route path='/addcustomer' component={AddCustomer} />
        </Switch>
     </Router> 
    );
  }
}     

export default App;
