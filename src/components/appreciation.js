import React from "react";

export default function Appreciation({ article, setSelectArticle }) {
  return (
    <>
      <div className="appreciation" >
        <img src={article.img} height={48} width={48} />
        <br />
        <span>{article.title}</span><br/>
        <button className="aprreciation-button" onClick={() => setSelectArticle(article)}>Ler mais</button>
      </div>
    </>
  );
}
