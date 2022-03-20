import './SideBySide.css';

export default function SideBySide({ id, children }) {
  return (
    <section id={id} className="side-by-side">
      {children}
    </section>
  )
}