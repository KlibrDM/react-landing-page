import React, { useState, useEffect } from 'react';
import NavLogo from '../NavLogo/NavLogo';
import "./NavItems.css"

export default function NavItems({ logo, logoHref, items }) {
  const [itemsShown, setItemsShown] = useState(true);

  //Toggle navbar items when hamburger button is pressed
  const handleNavbarItems = () => {
    setItemsShown(!itemsShown);
  };

  //Set itemslist for conditional rendering
  let itemsList = (
    <div id="navbar-items">
    {
      items.map((elem, index) => (
        <a href={elem[Object.keys(elem)[0]]} className="navbar-item" key={index}>
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
      if(width <= 800){
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