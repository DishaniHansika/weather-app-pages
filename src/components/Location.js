import React,{useState} from "react";

const Location=(props)=>{
    const[city,setCity]=useState('');

    const handleChange= event =>{
        setCity(event.target.value);
    };

    const handleSubmit= event =>{
        event.preventDefault();
        props.onSubmit({
            text:city
           
        });
        setCity('');
    }

    return(
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter City" value={city}
            onChange={handleChange}/>
            <button style={{margin:"10px"}}>Get Weather</button>
        </form>
    );

};

export default Location;