import React from 'react';
import { Header } from '../component/header/Header';
import { GlobalStyle } from '../GlobalStyled';
import { Home } from '../component/home/Home';

export const App = () => {
   
    return (
      <>
        <GlobalStyle/>
        <Header/>
        <Home/>
        

      </>
    );
}

