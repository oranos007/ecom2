import { useState } from "react";

export default function Form(){

    const [NameValue,SetNameValue] = useState("");
    const [EmailValue,SetEmailValue] = useState("");
    const [result,setresult] = useState('');
 
    function changename(event){
        SetNameValue(event.target.value);
    }
    function changeemail(event){
        SetEmailValue(event.target.value);
    }

    function submite(){
        if(NameValue === "" || EmailValue === "" ){
            setresult("Pleas enter some valid data")
        }
        else{
            setresult(`WELCOME ${NameValue} Your Email is ${EmailValue}`)
        }
        
    }

    return( 
        <div>
            <label>Name:</label>
            <input value={NameValue} onChange={changename}/>
            <hr/>
            <label>Email:</label>
            <input value={EmailValue} onChange={changeemail}/>
            <hr/>
            <button onClick={submite}>Submit</button>
            <h1>{result} </h1>
        </div>
        
    );
}