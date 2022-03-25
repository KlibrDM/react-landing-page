import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar({ children }) {
  const [height, setHeight] = useState(90);
  const [shadow, setShadow] = useState("0px 0px 0px rgba(0, 0, 0, 0)");
  
  const listenToScroll = () => {
    //Get scroll position
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;

    //If user scrolled past a point, make navbar smaller
    if(scroll > 60){
      setHeight(42);
      setShadow("0px 4px 10px rgba(0, 0, 0, 0.15)");
    }
    else{
      setHeight(90);
      setShadow("0px 0px 0px rgba(0, 0, 0, 0)");
    }
  }
  
  //Create event listener for user scrolling
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    listenToScroll();

    //Cleanup
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);
  
  return (
    <nav id="navbar" style={{height: height, boxShadow: shadow}}>
      <div id="navbar-content">
        {children}
      </div>
    </nav>
  )
}