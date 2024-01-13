import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShipmentsDetails = () => {
  const { index } = useParams();
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then(res => res.json())
      .then(json => setShipments(json));
  }, []);

  return (
    <div>
      {shipments.length !== 0 &&
      <div>
        {shipments[index].orderNo} <br />
        {shipments[index].date} <br />
        {shipments[index].customer} <br />
        {shipments[index].trackingNo} <br />
        {shipments[index].status} <br />
        {shipments[index].consignee} <br />
      </div>
      }
    </div>
  )
}

export default ShipmentsDetails