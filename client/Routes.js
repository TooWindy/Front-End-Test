import React from "react";
import { Route } from "react-router-dom";
import Beaches from './Components/Beaches'

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Beaches}/>
    </div>
  )
}

export default Routes
