import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [shipments, setShipments] = useState([]);
  const sessionShipments = JSON.parse(sessionStorage.getItem("shipments")) || [];

  useEffect(() => {
    if (sessionShipments.length !== 0) {
      setShipments(sessionShipments);
      return;
    }

    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then(res => res.json())
      .then(json => {
        setShipments(json)
        sessionStorage.setItem("shipments", JSON.stringify(json))
      })
  }, []);

  const remove = (index) => {
    shipments.splice(index, 1);
    setShipments(shipments.slice());
    sessionStorage.setItem("shipments", JSON.stringify(shipments))
  }

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
        {shipments.map((shipment, index) => 
        <tr key={shipment.orderNo}>
          <td>{shipment.orderNo}</td> 
          <td>{shipment.date}</td>
          <td>{shipment.customer}</td>
          <td>{shipment.trackingNo}</td>
          <td>{shipment.status}</td>
          <td>{shipment.consignee}</td>
          <td>
            <Link to={'/details/' + index}>
              <button>Edit</button>
            </Link>
            <button onClick={() => remove(index)}>Delete</button>
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage