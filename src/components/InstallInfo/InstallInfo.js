import './InstallInfo.css';

import GetItButton from '../GetItButton/GetItButton';

export default function InstallInfo({ title, description, button, buttonText, link }) {
  return (
    <div className="install-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <GetItButton type={button} buttonText={buttonText} link={link}></GetItButton>
    </div>
  )
}