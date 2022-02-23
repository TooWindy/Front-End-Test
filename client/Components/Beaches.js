import React from "react";

const Start = () => {

  const beachList = ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80"]



  return (
    <div>
      <div>
        <button> Prev</button>
        <img src={beachList[0]}/>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Start


