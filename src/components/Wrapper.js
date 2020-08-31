import React, { Component } from "react";
import { isFall } from "../utils/Date-Check";
import Autumn from "../pages/Autumn";
import NotAutumn from "../pages/Not-Autumn";


function Wrapper(props) {
    console.log(isFall);

    return (
    <>
         {isFall ? <Autumn/> : <NotAutumn/>}
    </>);
  }
  
  export default Wrapper;

