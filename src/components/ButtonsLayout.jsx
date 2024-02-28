
import React from "react";

const ButtonsLayout=({style, click, value})=>{   
    return(
        <button className={style} onClick={click}>{value}</button> 
    )
}


export default ButtonsLayout;