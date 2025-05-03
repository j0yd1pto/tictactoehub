import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white font-bold text-2xl p-4 fixed top-0 w-full'>
    <ol className='flex margin-auto justify-between'>
        <li>TIC TAC TOE HUB</li>
        <li><a href='#' display='none'>RULES</a></li>
    </ol>
    </div>
  )
}

export default Navbar
