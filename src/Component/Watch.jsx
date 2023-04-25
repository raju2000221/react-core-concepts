import React, { useEffect, useState } from 'react';
import Dial from './Dial';

const Watch = () => {
    const [setp,setStep] = useState(0);
    const increaseStep =()=>{
           const newStep = setp +1;
           setStep(newStep);


    }

    useEffect(()=>{
        console.log(setp)
    },[setp])

    return (
        <div style={{border: '2px solid red',margin: '8px'}}>
            <h2>This is my Smart Watch</h2>
            <p>Steps:  {setp} </p>
            <button onClick={increaseStep}>De dhooor.....</button>
            <Dial setp={setp}></Dial>
        </div>
    );
};

export default Watch;