import './SideImage.css';

export default function SideImage({ children }) {
  return (
    <div id="side-image">
      <img src={children} alt="preview"/>
    </div>
  )
}