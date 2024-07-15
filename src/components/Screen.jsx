import React from 'react';
// import "./Screen.css";

const Screen = ({ value }) => {
    return (
        <section className='h-24 w-full mb-2 p-2.5 bg-gray-800 border rounded-lg flex items-center justify-end text-white font-bold box-border'>
            {value}
        </section>
    )
}

export default Screen;