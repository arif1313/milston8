

const From = () => {
   
    const handlesubmit = e =>{
        e.preventDefault();
console.log(e.target.name.value)
    }
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text"name="name" /><br />
                <input type="email" name="email" /><br />
                <input type="submit"name="submit" />
            </form>
        </div>
    );
};

export default From;