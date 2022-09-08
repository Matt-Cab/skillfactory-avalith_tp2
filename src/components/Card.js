import React from 'react'

function Card({ image, name, status, species, gender, origin, location }) {
    return (
        <div className='card'>
            <img className="card--img" src={image} alt={name} />
            <div className="card--info-container">
                <h3 className="card--character-name">{name}</h3>
                <p className={"card--character-info character-status " + status.toLowerCase()}>Status: {status}</p>
                <p className="card--character-info">Species: {species}</p>
                <p className="card--character-info">Origin: {origin}</p>
                <p className="card--character-info">Location: {location}</p>
            </div>
        </div>
    )
}

export default Card