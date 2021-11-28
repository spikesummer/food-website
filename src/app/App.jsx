import React from 'react';
import { GlobalStyle } from '../GlobalStyled';
import { Header } from '../component/header/Header';
import { Home } from '../component/home/Home';
import { Popular } from '../component/popular/Popular';

export const App = () => {
   
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      {/* speciality */}
      <Popular/>
      {/* steps */}
      {/* galery */}
      {/* review */}
      {/* order */}
      {/* footer */}
    </>
  );
}

