import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

function ClientLogout({ onLogout }) {
    const [modalOn, setModalOn] = useState(false)
    const [choice, setChoice] = useState(false)

    function handleClick() {
        <ConfirmModal setModalOn={setModalOn} onChoice={setChoice} />
        if (choice) {
            fetch("/logout/client", {
                method: "DELETE",
            })
            .then(r => {
                if (r.ok) {
                    onLogout(null);
                }
            });
        }
    }

  return (
    <div>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default ClientLogout