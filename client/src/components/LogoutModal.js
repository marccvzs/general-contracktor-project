import React from 'react';

function LogoutModal({ onLogout, logoutModalOn, setChoice }) {

    function handleOkClick() {
        setChoice(true)
        fetch('/logout/client', {
            method: "DELETE",
          })
          .then(r => {
            if (r.ok) {
                onLogout(null);
              }
          })
        logoutModalOn(false)
    }
    
    function handleNoClick() {
        setChoice(false)
        logoutModalOn(false)
    }

  return (
    <div className="bg-slate-200 opacity-80 fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl">
                <div className="flex text-lg text-zinc-600 mb-10">Are you sure you want to logout?</div>
                <div className="flex">
                    <button onClick={handleOkClick} className="rounded px-4 py-2 text-white bg-green-400">Yes</button>
                    <button onClick={handleNoClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500">No</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default LogoutModal