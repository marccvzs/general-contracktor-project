import React, { useState } from 'react';

function ConfirmModal({ setChoice, onOkClick, setModalOn }) {
    
    function handleOkClick() {
        // setModalOn(false)
        onOkClick()
    }

    function handleCancelClick() {
        setModalOn(false);
    }

  return (
    <div className="bg-gradient-to-br from-zinc-200 opacity-80 fixed inset-0 z-100">

        <div className="flex h-screen justify-center items-center ">

            <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-[rgb(127,136,74)] rounded-xl">

                <div className="flex text-lg text-zinc-600 mb-10">Are you sure?</div>

                <div className="flex">

                    <button onClick={handleOkClick} className="rounded px-4 py-2 text-white bg-[rgb(127,136,74)]">Yes</button>
                    <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-red-500">No</button>

                </div>

            </div>

        </div>

    </div>
  );
}

export default ConfirmModal
