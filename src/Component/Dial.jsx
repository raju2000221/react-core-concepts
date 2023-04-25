import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple',margin:'5px'}}>
            <h2>This is Dial component</h2>
            <h3>Your Step Count : {props.setp}</h3>
        </div>
    );
};

export default Dial;