/*NAVBAR*/
export const logoHref = "#intro";
export const items = [
  {"Features":"#features"},
  {"Open Source":"#opensource"},
  {"Installation":"#installation"},
  {"Contact":"#contact"}
];
//FAQ section not included in the navbar items by default but it can be included

//Leave anchor text empty if you don't want to render that component

/*INTRODUCTION*/
export const introAnchor = "intro"; //Should be the same as logoHref (no #)
export const introTitle = "Modern New Tab Page";
export const introDescription = "A clean and simple new tab Chrome extension in which you can organize your favorite websites. Try it for free!";
export const introButtonType = "chrome"; //Recognized button types include chrome, github, appstore, googleplay, amazon
export const introButtonText = ""; //Leave empty if you have a recognized button type
export const introButtonLink = "https://chrome.google.com/webstore/detail/metro-speed-dial-modern-n/onhhmnkghemlcnlglcnjkhebiclbklpl?hl=en";
//IMAGE NAME: preview1.png

/*FEATURES*/
export const featuresAnchor = "features";
export const featuresTitle = "Features";
export const featuresDetails = [
  {"Minimalistic design":"We like things that look good, and we bet that so do you! Therefore, we made this extension with a modern, minimalistic metro design."},
  {"Simple to use":"No need to overcomplicate things. This extension is so easy to use that even my 3 year old managed to figure it out!"},
  {"Browse the web":"We integrated Google's search bar into our extension so you can google things as soon as you open your browser."},
  {"Quick access to the tools you use":"We made a few quick access shortcuts so you can get to your history, downloads, bookmarks and extensions with a single click!"}
];
//Background image name: detailsbg1.png

/*MIDDLE TEXT*/
export const midAnchor = "opensource";
export const midTitle = "Open Source Code";
export const midDescription = "Open source licensing encourages innovation through collaboration. If you have an idea that would make this extension better, feel free to contribute to this project.";
export const midButtonType = "github";
export const midButtonText = "";
export const midButtonLink = "https://github.com/KlibrDM/metro-tab";
//Image preview2.png

/*BottomInfo*/
export const botAnchor = "installation"
export const botTitle = "Installation"
export const botDetails = [
  {"users":{
    "title":"For users",
    "desc":"This extension is available on the Chrome Web Store. Just click the button bellow and then click on the Add to Chrome button.",
    "button":"chrome",
    "buttonText":"",
    "link":"https://chrome.google.com/webstore/detail/metro-speed-dial-modern-n/onhhmnkghemlcnlglcnjkhebiclbklpl?hl=en"
  }},
  {"developers":{
    "title":"For developers",
    "desc":"Feel free to clone the repository to your system. Follow the steps in the README to get the extension running in Chrome browser.",
    "button":"github",
    "buttonText":"",
    "link":"https://github.com/KlibrDM/metro-tab"
  }}
];
//Background image name: detailsbg2.png

/*FAQ*/
export const faqAnchor = "";
export const faqTitle = "";
export const faqDetails = [];
//Background image name: detailsbg3.png

/*Footer*/
export const footerLogoHref = "#intro"; //use # here
export const footerText = "MIT License - Copyright (c) 2022 Patrick (KlibrDM)";