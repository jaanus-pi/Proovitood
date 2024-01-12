import React, { useState, useEffect } from 'react'

const HomePage = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then(res => res.json())
      .then(json => setShipments(json));
  }, []);

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Order number</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Tracking number</th>
          <th>Status</th>
          <th>Consignee</th>
        </tr>
        </thead>
        <tbody>
        {shipments.map(shipment => 
        <tr key={shipment.orderNo}>
          <td>{shipment.orderNo}</td> 
          <td>{shipment.date}</td>
          <td>{shipment.customer}</td>
          <td>{shipment.trackingNo}</td>
          <td>{shipment.status}</td>
          <td>{shipment.consignee}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage