import Coustomhook2 from "./Costomhook2";


const Hookform2 = () => {
    const namestate =Coustomhook2();
    const emailstate = Coustomhook2()
    
    const handlesubmit =e=>{
        e.preventDefault()
        console.log(namestate.value)
        console.log(emailstate.value)
    }
    return (
        <div>
              <form action="" onSubmit={handlesubmit}>
                <input {...namestate} type="text"name="name" /><br />
                <input {...emailstate}type="email" name="email" /><br />
                <input type="submit"name="submit" />
            </form>
        </div>
    );
};

export default Hookform2;