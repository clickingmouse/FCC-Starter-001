import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './customers.css';


class Customers extends Component {
    constructor(){
        super();
this.state={
    customers:[]

}        
    }
// get customer data from backend
componentDidMount(){
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers:customers}, ()=>console.log('customers fetched..', customers)) );
}

  render() {
    return (
      <div >
          <h2>Customers</h2>
          <ul>
{this.state.customers.map(customer=> 
<li key={customer.id}>{customer.firstName} {customer.lastName} </li>
)}
        </ul>
        
      </div>
    );
  }
}

export default Customers;
