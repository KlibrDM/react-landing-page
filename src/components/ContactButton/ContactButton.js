import './ContactButton.css';

export default function ContactButton({ id, value }) {
  return (
    <input type="submit" id={id} name={id} value={value}></input>
  )
}