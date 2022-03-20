import "./NavLogo.css"

export default function NavLogo({ href, img }) {
  return (
    <a href={href} id="navbar-logo">
      <img src={img} alt="Logo"/>
    </a>
  )
}