import React, { useState } from 'react';

function ShowInput() {
    const [getVal, setgetVal] = useState('');
    const [input_data, setinput_data] = useState([]);
    const color1 = 'blue';
    const color2 = 'white';
    const showVal = (user) => {
        setgetVal(user.target.value);
    };

    const btn_click = () => {
        setinput_data([...input_data, getVal]);
        setgetVal('');
    };

    return (
        <div>
            <div>
                <input  className = "inputfield" type="text" value={getVal} onChange={showVal} />
                <button className='button'  onClick={btn_click}>Add</button>
            </div>
            <div>
                {input_data.map((value, count) => (
                    <span count={count} style={{ background: (count + 1) % 5 === 0 ? color1 : color2 }}> {value} </span>
                ))}
            </div>
        </div>
    );
}

export default ShowInput;
