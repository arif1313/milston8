import { useLoaderData, useNavigate } from "react-router-dom";

const Userdetail = () => {

    const navigate= useNavigate()

const handleBack=()=>{
    navigate(-1)
}

    const user =useLoaderData();
    const {name,website}=user;
    return (
        <div>
            <h3>User name is: {name}</h3>
            <h3>website : {website}</h3>
            <button onClick={handleBack}>GO Back</button>
        </div>
    );
};

export default Userdetail;