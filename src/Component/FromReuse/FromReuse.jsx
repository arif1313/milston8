



import PropTypes from 'prop-types';

const FromReuse = ({TextTitle,submitedtext="submit",handlefrom, children }) => {
    const handlesubmit =(e)=>{
         e.preventDefault()
    const value={
        name: e.target.name.value,
        email: e.target.email.value
    }

   handlefrom(value);
    }
    return (
        <div>
            <h1>title : {TextTitle}</h1>
            {children}
              <form action=""onSubmit={handlesubmit}>
                <input type="text" name="name" /><br />
                <input type="email" name="email" /><br />
              
                <input type="submit"  value={submitedtext}/>
            </form>
        </div>
    );
};
FromReuse.propTypes = {
  TextTitle:PropTypes.string ,
  submitedtext:PropTypes.string ,
  handlefrom:PropTypes.func,
  children:PropTypes.string
};

export default FromReuse;