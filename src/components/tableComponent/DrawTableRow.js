import React, {Component} from 'react';

class DrawTableRow extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(<tr key={this.props.customerIndex} >
            <td>{this.props.customerDetails.firstname}</td>
            <td>{this.props.customerDetails.lastname}</td>
            <td>{this.props.customerDetails.email}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>);
  }
}

export default DrawTableRow;