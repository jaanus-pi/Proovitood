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

// {/* <tr className={`table-row collapse ${index === selectedIndex ? 'show' : ''}`}>
//                 <td className='expanded-data' colSpan='2'>
//                   <img className='personal-image' src={person.image.large} alt={person.image.alt} colSpan='3' />
//                 </td>
//                 <td className='expanded-text' colSpan='3'>
//                   <p dangerouslySetInnerHTML={{ __html: person.body }} />
// <button as={Link} to={'/article/' + person.id} onClick={() => gotoArticle(person.id)}>loe rohkem</button>
//                 </td>
//               </tr> */}
//               const [selectedIndex, setSelectedIndex] = useState(null);
// const toggleRow = (index) => {
//     setSelectedIndex(selectedIndex === index ? null : index);
//   }
// {/* <tbody>
//           {displayedData.map((person, index) => (
//             <React.Fragment key={index}>
//               <tr className={`table-row ${index === selectedIndex ? 'selected' : ''}`} onClick={() => toggleRow(index)}>
//                 <td className='tighter-text'>{person.firstname}</td>
//                 <td className='tighter-text'>{person.surname}</td>
//                 <td className='tighter-text'>{convertSexToEstonian(person.sex)}</td>
//                 <td className='tighter-text'>{convertUnixTimestampToDate(person.date)}</td>
//                 <td className='tighter-text'>{person.phone}</td>
//               </tr>
//               <tr className={`table-row collapse ${index === selectedIndex ? 'show' : ''}`}>
//                 <td className='expanded-data' colSpan='2'>
//                   <img className='personal-image' src={person.image.large} alt={person.image.alt} colSpan='3' />
//                 </td>
//                 <td className='expanded-text' colSpan='3'>
//                   <p dangerouslySetInnerHTML={{ __html: person.body }} />
//                   <button as={Link} to={'/article/' + person.id} onClick={() => gotoArticle(person.id)}>loe rohkem</button>
//                 </td>
//               </tr>
//             </React.Fragment>
//           ))}
//         </tbody> */}