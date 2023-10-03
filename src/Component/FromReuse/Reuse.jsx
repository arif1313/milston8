import FromReuse from "./FromReuse";




const Reuse = () => {
    const handlefromsubmit = (value)=>{
        console.log("login submit data is: " ,value)


    }
    const handlefromupdat = (value)=>{
        console.log("login update data is : " ,value)


    }
    return (
        <div>
            <FromReuse TextTitle={'Submitform'} submitedtext={'submit'} handlefrom={handlefromsubmit}>
                <p>please submit valid data </p>
            </FromReuse>
            <FromReuse TextTitle={'Updateform'} submitedtext={'update'} handlefrom={handlefromupdat}>
                <p>keep remember your updated data </p>
            </FromReuse>
            
        </div>
    );
};

export default Reuse;