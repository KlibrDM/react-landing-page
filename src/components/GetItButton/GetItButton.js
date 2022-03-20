import './GetItButton.css';

export default function GetItButton({ type, buttonText, link }) {
  //Create buttons with images for specific types
  if(type === "chrome"){
    return (
      <a href={link} className="get-it-button">
        <img src={require("../../images/chromewebstore-button.png")} alt="Chrome Web Store"/>
      </a>
    )
  }
  else if(type === "github"){
    return (
      <a href={link} className="get-it-button">
        <img src={require("../../images/github-button.png")} alt="Github"/>
      </a>
    )
  }
  else if(type === "appstore"){
    return (
      <a href={link} className="get-it-button">
        <img src={require("../../images/appstore-button.png")} alt="App Store"/>
      </a>
    )
  }
  else if(type === "googleplay"){
    return (
      <a href={link} className="get-it-button">
        <img src={require("../../images/googleplay-button.png")} alt="Google Play"/>
      </a>
    )
  }
  else if(type === "amazon"){
    return (
      <a href={link} className="get-it-button">
        <img src={require("../../images/amazon-button.png")} alt="Amazon"/>
      </a>
    )
  }
  else{
    return (
      <a href={link} className="get-it-button get-it-button-standard">
        {buttonText}
      </a>
    )
  }
}