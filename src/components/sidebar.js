import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../hook/selectArticle"

export default function Sidebar(){
    const [color, setColor] = useState("black");
    useEffect(() =>{
        document.getElementById("article-paragraph").style.color = color;
    },[color])

    return(
        <>
         <aside className="side">
          <h4>Cor da fonte</h4>
          <li style={{color:"red"}} onClick={() => setColor("red")}>Vermelho</li>
          <li style={{color:"black"}} onClick={() => setColor("black")}>Preto</li>
          <li style={{color:"blue"}} onClick={() => setColor("blue")}>Azul</li>
          <li style={{color:"yellow"}} onClick={() => setColor("yellow")}>Amarelo</li>
        </aside>
        </>
    )
}