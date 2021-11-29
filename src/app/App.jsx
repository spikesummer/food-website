import React, {useState, useEffect} from 'react';
import { GlobalStyle } from '../GlobalStyled';
import { Header } from '../component/header/Header';
import { Home } from '../component/home/Home';
import { Speciality } from '../component/speciality/Speciality';
import { Popular } from '../component/popular/Popular';
import { Steps } from '../component/steps/Steps';
import { Gallery } from '../component/gallery/Gallery';
import { Review } from '../component/review/Review';
import { Order } from '../component/order/Order';
import { Footer } from '../component/footer/Footer';
import { ScrollTop } from '../component/scrollTop/ScrollTop';
import { Loader } from '../component/loader/Loader';

export const App = () => {
  const [mudaActive, setMudaActive] = useState("");
  const [loadOut, setloadOut] = useState("");

  useEffect(()=>{
    window.onload = () => fadeOut();
    window.onscroll = () => {
        window.scrollY > 60?setMudaActive("active"):setMudaActive("")}
  }, [])

  function fadeOut(){
    setInterval(()=>setloadOut("fade-out"), 3000);
  }
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Speciality/>
      <Popular/>
      <Steps/>
      <Gallery/>
      <Review/>
      <Order/>
      <Footer/>
      <ScrollTop active={mudaActive}/>
      <Loader fade={loadOut}/>
    </>
  );
}

