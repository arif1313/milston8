import { useLoaderData } from "react-router-dom";
import User from "../User/user";
import '../User/user.css'


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2> Total user : {users.length} </h2>
           <div className="box">
           {
                users.map((user,inx)=><User key={inx} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;