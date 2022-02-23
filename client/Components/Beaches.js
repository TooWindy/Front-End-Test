import React, { useState } from "react";

const Start = () => {
  const [count, setCount] = useState(0)

  //This serves as our dummy data. In a live website, this would probably wouldn't be utilized unless we want static images.

  const beachList = {
    0: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80",
    1: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    2: 'https://images.unsplash.com/photo-1593974455196-c1084398f41a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80',
    3: 'https://images.unsplash.com/photo-1525968635328-37e2ce22d2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
  }

  //These two function operate our clicks to view pictures. Since we have access to our dummy data, we can simply increase the count if the user clicks next, or decrease the count if the user clicks prev. I added a sort of wrapping conditional, to where if the user exceeds the length of our object, we just set the count back to 0. The same applies if the count goes below 0
  const nextClick = () => {
    // console.log("next!")
    if(count >= Object.keys(beachList).length -1){
      setCount(0)
    }
    else{
      setCount(count + 1)
    }
  }

  const prevClick = () => {
    // console.log("prev!")
    if(count <= 0){
      setCount(Object.keys(beachList).length -1)
    }
    else{
      setCount(count -1)
    }
  }

  return (
    <div>
      <div>
        {console.log(count)}
        <button onClick={prevClick}> Prev</button>
        <img src={beachList[count]}/>
        <button onClick={nextClick}>Next</button>
      </div>
    </div>
  )
}

export default Start


