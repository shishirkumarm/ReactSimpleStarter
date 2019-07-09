import React from 'react';
import DrawTableRow from "./DrawTableRow";

const DrawTableBody = (props) => {
  const rowListItems = props.customerCollection.map((customerItem, index) => {
    return <DrawTableRow customerDetails={customerItem} customerIndex={index} />
  });

  return(
    <tbody>
      {rowListItems}
    </tbody>
  );
};

export default DrawTableBody;
