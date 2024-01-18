import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../assets/css/ShipmentDetails.css'

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
      <div className='content'>
        <h2>SHIPMENT DETAILS</h2>
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
        <Button onClick={save} color='primary'>Save</Button>
        <Button onClick={() => navigate('/')} color='info'>Back to shipments</Button>
      </div>
    </div>
  )
}

export default ShipmentDetails