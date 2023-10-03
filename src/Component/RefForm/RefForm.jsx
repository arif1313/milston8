import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameref = useRef();
    const emailref = useRef();
    // for cursof focus
    useEffect(()=>{
        nameref.current.focus() 
    },[])

    const handlesubmit = e => {

        e.preventDefault();
        console.log(nameref.current.value);

    } 
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input ref={nameref} type="text"name="name" /><br />
                <input ref={emailref} type="email" name="email" /><br />
                <input  type="submit"name="submit" />
            </form>
        </div>
    );
};

export default RefForm;