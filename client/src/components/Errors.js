import React from 'react';

function Errors({ errors }) {

    const errorsList = errors.map(err => {
        return ( 
        <div key={err} className="bg-rose-300 m-2 flex p-2 rounded-md items-center gap-2">
            <span className="bg-white grid font-bold rounded-full p-1 place-content-center h-30 w-30">!</span>
            <p className="m-0">{err}</p>
        </div>
        )
    })
  return (
    <>
        {errorsList}
    </>
  )
}

export default Errors