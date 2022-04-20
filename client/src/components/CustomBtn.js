import React from 'react'

function CustomBtn({ onClickItem, btnPadding, children }) {
  return (
    <button onClick={onClickItem} className={`px-12 py-3 bg-black/40 uppercase text-white rounded-md animate-pulse font-bold shadow-md shadow-black ${btnPadding}`}>{children}</button>
  )
}

export default CustomBtn