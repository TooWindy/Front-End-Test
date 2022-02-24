import React, { useState } from "react";

const Beaches = () => {
  const [count, setCount] = useState(0)

  //This serves as our dummy data. In a live website, this probably wouldn't be utilized unless we want static images. In anycase, I chose to utilize a hash map here because of reference speed as well as it being somewhat similar to JSON data that I'd be recieving from our backend. More photos can always be added to our hashmap here.

  const beachList = {
    0: "/assets/beach-780w.jpeg",
    1: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    2: 'https://images.unsplash.com/photo-1593974455196-c1084398f41a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80',
    3: 'https://images.unsplash.com/photo-1525968635328-37e2ce22d2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
  }

  //These two functions operate our clicks to view pictures. Since we have access to our dummy data, we can simply increase the count of our state if the user clicks next, or decrease the count if the user clicks prev. I added a sort of wrapping conditional, to where if the user exceeds the length of our object, we just set the count back to 0. The same applies if the count goes below 0

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
      <div id={'beachContainer'}>
        {/* {console.log(count)} */}
        <button id={'prevButton'} onClick={prevClick}> Prev</button>
        <div id={'beachCenter'}>
          <img  id={'beachImage'}src={beachList[count]} alt={'A nice beach picture'} />
        </div>
        <button id = {'nextButton'} onClick={nextClick}>Next</button>
      </div>
    </div>
  )
}

export default Beaches


//This code here essentially allows the browser to pick the optimal resolution based on its current size. Unfortunately since I don't have the multiple pictures of varying resolutions, this code wouldn't work as of now.

//  <img id={'beachImage'} srcSet={'/assets/beach-780w.jpeg 780w, /assets/beach-650w.jpeg 650w'} sizes={'(maxwidth: 780px) 650px, 780px'} src={'/assets/beach-780w.jpeg'} alt={"A nice beach picture"}/>
