import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../hook/selectArticle"

export default function Article(){
    const [article] = useContext(Context);
      
    return (
        <>
        <div>
            <img className="img-article" src={article.img} alt="" />
            <p id="article-paragraph" style={{color:article.color}}>
              {article.text}
            </p>
          </div>
        </>
    )
}