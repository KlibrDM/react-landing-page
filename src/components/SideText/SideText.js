import './SideText.css';

import GetItButton from '../GetItButton/GetItButton';

export default function SideText({ title, description, button, buttonText, link }) {
  return (
    <div id="side-text">
      <h1>{title}</h1>
      <p>{description}</p>
      <GetItButton type={button} buttonText={buttonText} link={link}></GetItButton>
    </div>
  )
}