import React from "react";


function Icon(props){
return (
<div  className="IconDiv">
    
    <img className="iconImg" src={props.img} alt ={props.alt}></img>
    <h6 className="IconText"> {props.Title}</h6>

</div>)
}
export default Icon;