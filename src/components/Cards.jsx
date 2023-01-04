import React from "react";


function Cards(props) {
     
    return(
        <div className ="cardDiv">
<h1 className = "cardTitle">
{props.Titulo}
</h1>
<a href={props.href}>
<img    
className = "imgCard"
        src={props.img} 
        alt={props.alt}/>

</a>
<p className="pCard">
{props.content}
</p>
        </div>)
        }
    
export default Cards;