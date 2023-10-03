import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2 > Nevbar</h2>
           
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink> 
           <NavLink to="/contact"> Contact</NavLink>
           <NavLink to="/users"> Users</NavLink>
           <NavLink to ="/from">Form</NavLink>
           <NavLink to ="/from2">Form2</NavLink>
           <NavLink to ="/refform">RefForm</NavLink>
           <NavLink to ="/hokform">HokForm</NavLink>
           <NavLink to ="/hokform2">HokForm2</NavLink>
           <NavLink to ="/reuseform">euseform</NavLink>
           
        
        </div>
    );
};

export default Header;