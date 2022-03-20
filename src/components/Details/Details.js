import './Details.css';

export default function Details({ title, id, bgImg, children }) {
  return (
    <section id={id} className="details" style={{backgroundImage: "url("+bgImg+")"}}>
      <h2>{title}</h2>
      <div className="details-info-box">
        {children}
      </div>
    </section>
  )
}