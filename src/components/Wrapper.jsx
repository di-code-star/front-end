import React from 'react'
// import "./Wrapper.css"

const Wrapper = ({ children }) => {
    return (
        <div className='w-80 h-full p-2 border rounded-lg bg-gray-600 bg-gradient-to-tr'>
            {children}
        </div>
    )
}

export default Wrapper;