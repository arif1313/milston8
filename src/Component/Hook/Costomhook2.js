import { useState } from "react";


const Coustomhook2 =(defaultvalu="")=>{
    const [value, setvalue]=useState(defaultvalu);
    const onChange = e=>{
        setvalue(e.target.value);
        
    }
    return{
        value,
        onChange
    }
}
export default Coustomhook2;