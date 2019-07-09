import React, { Component } from 'react';
import customerData from "./../testData/customerData";
import DrawTableBody from "./tableComponent/DrawTableBody";
import AddCustomerForm from "./AddCustomerForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerCollection: []
    }
  }

  componentDidMount() {
    this.setState({
      customerCollection: customerData.customerCollection
    })
  }

  render() {
    return(<div className="container">
      <h2>Basic Table for React implementation</h2>
      <AddCustomerForm />
      <p>List of Customers</p>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <DrawTableBody customerCollection={this.state.customerCollection}></DrawTableBody>
      </table>
    </div>);
  }
}
