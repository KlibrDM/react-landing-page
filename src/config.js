/*NAVBAR*/
export const logoHref = "#intro";
export const items = [
  {"Features":"#features"},
  {"Preview":"#preview"},
  {"More Details":"#moredetails"},
  {"Contact":"#contact"}
];

/*INTRODUCTION*/
export const introAnchor = "intro"; //Should be the same as logoHref (no #)
export const introTitle = "Landing Page";
export const introDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus malesuada nunc, in vehicula diam viverra quis.";
export const introButtonType = "github"; //Recognized button types include chrome, github, appstore, googleplay, amazon
export const introButtonText = ""; //Leave empty if you have a recognized button type
export const introButtonLink = "https://github.com/KlibrDM/react-landing-page";
//IMAGE NAME: preview1.png

/*FEATURES*/
export const featuresAnchor = "features";
export const featuresTitle = "Features";
export const featuresDetails = [
  {"Feature 1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus malesuada nunc, in vehicula diam viverra quis."},
  {"Feature 2":"Proin eros quam, ultricies viverra interdum sed, malesuada vitae odio. Curabitur sollicitudin ullamcorper mattis"},
  {"Feature 3":"Maecenas imperdiet sed quam quis varius. Sed imperdiet arcu quis nisi dapibus malesuada."},
  {"Feature 4":"Cras dignissim, ipsum quis mattis venenatis, justo metus hendrerit tortor, ac pretium lacus lorem malesuada risus."}
];
//Background image name: detailsbg1.png

/*MIDDLE TEXT*/
export const midAnchor = "preview";
export const midTitle = "Preview";
export const midDescription = "Nunc in posuere ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut gravida hendrerit consectetur. Nam a hendrerit ligula, id egestas elit.";
export const midButtonType = "amazon";
export const midButtonText = "";
export const midButtonLink = "https://www.amazon.com";
//Image preview2.png

/*BottomInfo*/
export const botAnchor = "moredetails";
export const botTitle = "More details";
export const botDetails = [
  {"detail1":{
    "title":"Very important detail",
    "desc":"Phasellus pharetra, orci sed bibendum tempus, ipsum lectus ullamcorper libero, non hendrerit ipsum velit vitae ante.",
    "button":"googleplay",
    "buttonText":"",
    "link":"https://play.google.com/"
  }},
  {"detail2":{
    "title":"Not so important detail",
    "desc":"Donec velit metus, egestas rutrum nibh sed, volutpat mattis erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "button":"appstore",
    "buttonText":"",
    "link":"https://www.apple.com/app-store/"
  }}
];
//Background image name: detailsbg2.png

/*Footer*/
export const footerLogoHref = "#intro"; //use # here
export const footerText = "MIT License - Copyright (c) 2022 Patrick (KlibrDM)";