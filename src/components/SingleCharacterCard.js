import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from './Card';

const SingleCharacterCard = () => {
    const [character, setCharacter] = useState({});
    const characterId = useParams().id;

    const fetchSingleCharacter = () => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else throw Error
            })
            .then(data => {
                console.log(data);
                setCharacter(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(fetchSingleCharacter, [characterId]);

    return (
        <Card
            id={character.id}
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            location={character.location?.name}
        />
    )
}

export default SingleCharacterCard;
