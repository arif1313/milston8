import CustomState from "./customhook";



const Hookform = () => {
   const[value, handleChange] = CustomState();
   const handlesubmit =e =>{
    e.preventDefault();
    console.log(value);

   }

    return (
        <div>
             <form action="" onSubmit={handlesubmit}>
                <input value={value} onChange={handleChange} type="text"name="name" /><br />
                <input type="email" name="email" /><br />
                <input type="submit"name="submit" />
            </form>
        </div>
    );
};

export default Hookform;