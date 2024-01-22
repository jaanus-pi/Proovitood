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
      <b>{article.intro}</b>
      {/* <img src={article.image.medium} alt={article.image.alt} /> */}
      <img src="https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg" alt='' />
      {article.body}
    </div>
  )
}

export default Artikkel