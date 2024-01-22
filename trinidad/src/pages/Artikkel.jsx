import React, { useEffect, useState } from 'react'

const Artikkel = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://midaiganes.irw.ee/api/list/972d2b8a")
      .then(res => res.json())
      .then(json => setArticle(json))
  }, []);

  return (
    <div>
      <h2>{article.title}</h2> <br />
      <b>{article.intro}</b> <br />
      {/* <img src={article.image.medium} alt={article.image.alt} /> */}
      <img src="https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg" alt='' width="854" height="480"/> <br />
      {article.body}
    </div>
  )
}

export default Artikkel