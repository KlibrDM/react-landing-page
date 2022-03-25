import React, { useState, useEffect } from 'react';
import NavLogo from '../NavLogo/NavLogo';
import "./NavItems.css"

export default function NavItems({ logo, logoHref, items }) {
  const [itemsShown, setItemsShown] = useState(true);
  const minDesktopWidth = 800;

  //Toggle navbar items when hamburger button is pressed
  const handleNavbarItems = () => {
    setItemsShown(!itemsShown);
  };

  const hideNavbarItemsOnClickForMobile = () => {
    const width = window.innerWidth;
    if(width < minDesktopWidth){
      setItemsShown(false);
    }
  }

  //Set itemslist for conditional rendering
  let itemsList = (
    <div id="navbar-items">
    {
      items.map((elem, index) => (
        //Added on click for navbar items to hide them after click when on mobile
        <a href={elem[Object.keys(elem)[0]]} className="navbar-item" onClick={hideNavbarItemsOnClickForMobile} key={index}>
          {Object.keys(elem)[0]}
        </a>
      ))
    }
    </div>
  );
  
  //Create event listener for window resize (to hide / show navbar items when resized)
  useEffect(() => {
    const listenToResize = () => {
      const width = window.innerWidth;
      if(width <= minDesktopWidth){
        setItemsShown(false);
      }
      else{
        setItemsShown(true);
      }
    }
    window.addEventListener('resize', listenToResize);
    listenToResize();

    //Cleanup
    return () => {
      window.removeEventListener('resize', listenToResize);
    };
  }, []);

  return (
    <>
      <div className="nav-mobile-fix">
        <NavLogo href={logoHref} img={logo}></NavLogo>
        <button onClick={handleNavbarItems} className="nav-burger-button">=</button>
      </div>
      { itemsShown ? itemsList : <></> }
    </>
  )
}