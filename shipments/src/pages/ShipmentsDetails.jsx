import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'

const ShipmentsDetails = () => {
  const { index } = useParams();
  const [shipments, setShipments] = useState([]);
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then(res => res.json())
      .then(json => setShipments(json));
  }, []);

  return (
    <div>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      {shipments.length !== 0 &&
      <div>
        <label>Order number</label> <br />
        <input type="text" defaultValue={shipments[index].orderNo} ref={orderNoRef}/> <br />
        <label>Date</label> <br />
        <input type="text" defaultValue={shipments[index].date} ref={dateRef}/> <br />
        <label>Customer</label> <br />
        <input type="text" defaultValue={shipments[index].customer} ref={customerRef}/> <br />
        <label>Tracking Number</label> <br />
        <input type="text" defaultValue={shipments[index].trackingNo} ref={trackingNoRef}/> <br />
        <label>Status</label> <br />
        <input type="text" defaultValue={shipments[index].status} ref={statusRef}/> <br />
        <label>Consignee</label> <br />
        <input type="text" defaultValue={shipments[index].consignee} ref={consigneeRef}/> <br />
      </div>
      }
    </div>
  )
}

export default ShipmentsDetails