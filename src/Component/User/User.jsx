


import PropTypes from 'prop-types';
import { Link,  useNavigate } from 'react-router-dom';


const User = ({user}) => {
    const {id,username, name,email,phone}=user;
  const style ={
   'border'  :'5px solid skyblue',
    'border-radius' : '8px',
    'padding' : '10px',
   
  }
  const navigate = useNavigate();
  const handleDetails=()=>{
    
    navigate(`/user/${id}`);
  }
    return (
   
            <div style={style}>
             
               <h2> Name : {name} </h2>
               <h4> Username : {username} </h4>
               <h4> Email : {email} </h4>
               <h4> Phone : {phone} </h4>
               <Link to={`/user/${id}`}>show details</Link>
               <button onClick={handleDetails}>details</button>
            </div>
      
    );
};
User.propTypes = {
    user:PropTypes.object
};

export default User;