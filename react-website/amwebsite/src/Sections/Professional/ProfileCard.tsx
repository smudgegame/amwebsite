import { useState } from 'react'
import './ProfileCard.css'

type ProfileCardProps = {
  name: string
  role: string
  photoSrc: string
  status?: string
  location?: string
}

export default function ProfileCard({
  name,
  role,
  photoSrc,
  status = 'Open to opportunities',
  location = 'United States',
}: ProfileCardProps) {
  const [imageError, setImageError] = useState(false)
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <article className="profile-card" aria-label="Professional profile card">
      <div className="profile-card__avatar" aria-hidden="true">
        {!imageError ? (
          <img
            src={photoSrc}
            alt={name}
            className="profile-card__image"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="profile-card__initials">{initials}</span>
        )}
      </div>

      <div className="profile-card__content">
        <p className="profile-card__label">Profile</p>
        <h1 className="profile-card__name">{name}</h1>
        <p className="profile-card__role">{role}</p>

        <div className="profile-card__meta">
          <span className="profile-card__chip">{status}</span>
          <span className="profile-card__location">{location}</span>
        </div>
      </div>
    </article>
  )
}
