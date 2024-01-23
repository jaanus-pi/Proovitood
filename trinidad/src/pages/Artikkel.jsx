import React, { useEffect, useState } from 'react';
import '../styles/Artikkel.css'

const Artikkel = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://midaiganes.irw.ee/api/list/972d2b8a")
      .then(res => res.json())
      .then(json => setArticle(json))
  }, []);

  return (
    <div className='page'>
      <h1>{article.title}</h1>
      <div className='intro' dangerouslySetInnerHTML={{__html: article.intro}}/>
      {/* <img src={article.image.medium} alt={article.image.alt} /> */}
      <img src="https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg" alt='' width="854" height="480"/> <br />
      <div dangerouslySetInnerHTML={{__html: article.body}}/>
    </div>
  )
}

export default Artikkel