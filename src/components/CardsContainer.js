import React from 'react';
import { useState, useEffect } from "react";
import Card from "./Card.js";
import PageChanger from './PageChanger.js';

function CardsContainer() {
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState({ results: [], info: { pages: 0 } });

    const fetchCharacters = async (url) => {
        try {
            const response = await fetch(url);

            if (response.ok) {
                const characters = await response.json();

                return { status: response.status, characters };
            }
            else {
                return { status: response.status };
            }
        }
        catch (error) {
            return { error };
        }
    }

    useEffect(() => {
        const getListOfCharacters = async (url) => {
            try {
                // const data = await fetchCharacters("../JSON/fake_data.json");
                const data = await fetchCharacters(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);

                if (data.error) {
                    console.error(data.error);
                    return;
                }

                if (data.status !== 200) {
                    console.warn(`There was a problem with the request. Status code: ${data.status}`);
                    return;
                }

                setCharacters(data.characters);
            }
            catch (error) {
                console.error(error);
            }
        }

        getListOfCharacters();
    }, [pageNumber]);

    return (
        <>
            <h1 className='main-title'>Cards</h1>
            <div id="cards-container" className="cards-container">
                {characters.results.map(character => {
                    return (
                        <Card
                            id={character.id}
                            key={character.id}
                            image={character.image}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            // gender={character.gender}
                            origin={character.origin.name}
                            location={character.location.name}
                        />
                    );
                })
                }
            </div>
            <PageChanger pageNumber={pageNumber} setPageNumber={setPageNumber} maxPages={characters.info.pages} />
        </>
    )
}

export default CardsContainer;