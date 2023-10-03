import { Link, useRouteError } from "react-router-dom";


const Erorr = () => {
const erorr=useRouteError()
console.log(erorr)
    return (
        <div>
            <h2>Opps!!!!<br />not page found !</h2>
            <p>{erorr.statusText || erorr.message}</p>
            <div>
                <Link to='/'><button>go back</button></Link>
            </div>
        </div>
       
       
    );
};

export default Erorr;