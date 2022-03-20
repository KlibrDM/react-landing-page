import './Footer.css';

export default function Footer({ logo, logoHref, text }) {
  return (
    <footer id="footer">
      <a href={logoHref}>
        <img src={logo} alt="Logo"/>
      </a>
      <p>{text}</p>
    </footer>
  )
}