import React from 'react';
import "./ButtonBox.css"

const ButtonBox = ({ children }) => {
    return (
        <section className='w-full h-5/6 grid grid-cols-4 grid-rows-5 gap-2'>
            {children}
        </section>
    )
}

export default ButtonBox;