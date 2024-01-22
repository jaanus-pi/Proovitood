import React, { useEffect, useState } from 'react'

const Tabel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://midaiganes.irw.ee/api/list?limit=500")
      .then(res => res.json())
      // Ensure that data.list is an array
      .then(data => setData(data.list))
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Eesnimi</th>
            <th>Perekonnanimi</th>
            <th>Sugu</th>
            <th>Sünnikuupäev</th>
            <th>Telefon</th>
          </tr>  
        </thead>
        <tbody>
          {data.map((person, index) => 
          <tr key={index}>
            <td>{person.firstname}</td>
            <td>{person.surname}</td>
            <td>{person.sex}</td>
            <td>{person.date}</td>
            <td>{person.phone}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tabel