import { useState } from "react";



const FormOnchange = () => {

    const [name, setname ] =useState('arif');
    const handelsubmit =(e)=>{
       e.preventDefault();
       
    }
    const handlename =(e)=>{
        setname(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={handelsubmit}>

                <input onChange={handlename} type="text" name="name" placeholder="your name" /><br />
                <input type="email" name="email"/><br />
                <input type="password" name="password" /><br />
                <input type="submit" />
                {
                    <p>name : {name}</p>
                }
            </form>
        </div>
    );
};

export default FormOnchange;