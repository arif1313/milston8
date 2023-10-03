import { useState } from "react"

const CustomState = (defaultValue="")=>{
    const  [value , setvalue] =  useState(defaultValue);

    const handleChange=(e)=>{
        setvalue(e.target.value);
    }
    return [value, handleChange]


}


export default CustomState;
