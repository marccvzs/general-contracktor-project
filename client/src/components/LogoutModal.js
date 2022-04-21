import React from 'react';

function LogoutModal({ onLogout, setLogoutModalOn }) {

    function handleOkClick() {
        fetch('/logout/client', {
            method: "DELETE",
          })
          .then(r => {
            if (r.ok) {
                onLogout(null);
              }
          })
        setLogoutModalOn(false)
    }
    
    function handleNoClick() {
        setLogoutModalOn(false)
    }

  return (
    <div className="bg-slate-200 opacity-80 fixed inset-0 z-100">

        <div className="flex h-screen justify-center items-center">

            <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-red-500 rounded-xl shadow-lg shadow-black">

                <div className="flex text-lg text-zinc-600 mb-10">Are you sure you want to logout?</div>

                <div className="flex">
                    <button onClick={handleOkClick} className="rounded px-4 py-2 ml-5 text-white bg-[rgb(127,136,74)]">Yes</button>
                    <button onClick={handleNoClick} className="rounded px-4 py-2 ml-20 text-white bg-red-500">No</button>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default LogoutModal