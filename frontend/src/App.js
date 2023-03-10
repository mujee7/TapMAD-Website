import React, { useEffect,Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Carousels from './carousel';
import Head from './head';
import Sliders from './slider';


const AnotherComponent = React.lazy(() => import('./slidercarousel.js'));

function DApp() {
  const [loader,SetLoader]=useState(true);
  const [loader1,SetLoader1]=useState(true);
  const [loader2,SetLoader2]=useState(true);
  const [data,setData]=useState([])
  const [data1,setData1]=useState([])
  const [data2,setData2]=useState([])
 const [scroll,Setscroll]=useState(0)

window.addEventListener("scroll",()=>{
  Setscroll(window.pageYOffset)
  console.log(window.pageYOffset)
})

  async function GetData(){
    if(loader==false){
      return
    }
    const response=await fetch(`https://confused-erin-tam.cyclic.app/category/kids`)
    const result=await response.json()
    setData(result)
    SetLoader(false)
    

  }
  async function GetData1(){
    if(loader1==false){
      return
    }

    const response=await fetch(`https://confused-erin-tam.cyclic.app/category/movies`)
    const result=await response.json()
    
    setData1(result)
    SetLoader1(false)
    

  }
  async function GetData2(){
    if(loader2==false){
      return
    }
    const response=await fetch(`https://confused-erin-tam.cyclic.app/category/shows`)
    const result=await response.json()
    console.log(result)
    
      setData2(result)
      SetLoader2(false)
    
    
    

  }
  
 if(scroll>210 ){

    GetData()
    GetData1();
    GetData2();
 }
 if(scroll>400){
  
 }
 if(scroll>400){
  
 }
  return (
  <>
  <Head/>
  <Carousels/>
  <Sliders  />
      {loader?<h1>Loading</h1>:<>
      <div className="">
      


        <AnotherComponent data={data} heading={"Kids Section"}/>
      {
        loader1?<h1>Loading</h1>:
        <AnotherComponent data={data1} heading={"Movies Section"}/>
      }
      {
       loader2?
        null
        :<AnotherComponent data={data2} heading={"Shows Section"}/>
      }
        
      
    </div>
    </>}
  </>
  );
}

export default DApp;
