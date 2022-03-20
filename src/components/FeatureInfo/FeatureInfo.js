import './FeatureInfo.css';

export default function FeatureInfo({ title, description }) {
  return (
    <div className="feature-info">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}