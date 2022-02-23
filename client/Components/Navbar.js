import React from 'react'

const NavBar = () => {
  return(
    <div className={'header'}>
       <img className={'navImage'} src={'/assets/tree.png'}/>
      <h1 className={'logo'}>Beach Viewer</h1>
      <nav className={'nav'}>
        <div>
          <div className={'dropdown'}>
            <a>Categories</a>
            <div className={'dropdown-list'}>
              <p>Rocky Beaches</p>
              <p>Glass Beaches</p>
              <p>Boulder Beaches</p>
              <p>Sandy Beaches</p>
            </div>
          </div>
          <a>Popular</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
