import React, { useEffect, useState } from 'react';
import '../styles/Table.css';

const Tabel = () => {
  const [panel, setPanel] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://midaiganes.irw.ee/api/list?limit=500")
      .then(res => res.json())
      // Ensure that data.list is an array
      .then(data => setData(data.list))
  }, []);

  const openPanel = () => {
    if (panel === false) {
      setPanel(true);
    } else {
      setPanel(false);
    }
  }

  return (
    <div className='page'>
      <div className='content'>
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
            <tr onClick={() => openPanel()}>
              <td>aaaaaaaa</td>
              <td>aaaaaaaa</td>
              <td>aaaaaaaa</td>
              <td>aaaaaaaa</td>
              <td>aaaaaaaa</td>
            </tr>
            {data.map((person, index) =>
            <>
            <tr key={index} onClick={() => openPanel()}>
              <td>{person.firstname}</td>
              <td>{person.surname}</td>
              <td>{person.sex}</td>
              <td>{person.date}</td>
              <td>{person.phone}</td>
            </tr>
            {panel === true &&
            <tr>
              <td>Tere</td>
            </tr>}
            </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tabel