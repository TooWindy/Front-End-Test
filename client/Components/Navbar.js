import React from 'react'

const NavBar = () => {
  return(
    <div className={'header'}>
       <img className={'navImage'} src={'/assets/tree.png'}/>
      <h1 className={'logo'}>Beach Viewer</h1>
      <nav className={'nav'}>
        <div>
          <a>More Beaches!</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
