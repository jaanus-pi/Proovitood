import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ShipmentDetails = () => {
  const { index } = useParams();
  const allShipments = JSON.parse(sessionStorage.getItem("shipments"));
  const foundShipment = allShipments[index]
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();
  const navigate = useNavigate();

  const save = () => {
    const updatedShipment = {
    "orderNo": orderNoRef.current.value,
    "date": dateRef.current.value,
    "customer": customerRef.current.value,
    "trackingNo": trackingNoRef.current.value,
    "status": statusRef.current.value,
    "consignee": consigneeRef.current.value
    }

    allShipments[index] = updatedShipment;
    sessionStorage.setItem("shipments", JSON.stringify(allShipments));
    navigate('/')
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <div>
        <label>Order number</label> <br />
        <input type="text" defaultValue={foundShipment.orderNo} ref={orderNoRef}/> <br />
        <label>Date</label> <br />
        <input type="text" defaultValue={foundShipment.date} ref={dateRef}/> <br />
        <label>Customer</label> <br />
        <input type="text" defaultValue={foundShipment.customer} ref={customerRef}/> <br />
        <label>Tracking Number</label> <br />
        <input type="text" defaultValue={foundShipment.trackingNo} ref={trackingNoRef}/> <br />
        <label>Status</label> <br />
        <input type="text" defaultValue={foundShipment.status} ref={statusRef}/> <br />
        <label>Consignee</label> <br />
        <input type="text" defaultValue={foundShipment.consignee} ref={consigneeRef}/> <br />
        <button onClick={save}>Save</button>
      </div>
    </div>
  )
}

export default ShipmentDetails