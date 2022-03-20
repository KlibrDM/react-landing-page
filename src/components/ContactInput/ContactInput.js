import './ContactInput.css';

export default function ContactInput({ type, placeholder, id, pattern, isReq }) {
  if(type !== "textarea"){
    return (
      <input type={type} placeholder={placeholder} id={id} name={id} pattern={pattern} required={isReq} />
    )
  }
  else{
    return (
      <textarea placeholder={placeholder} id={id} name={id} pattern={pattern} required={isReq} />
    )
  }
}