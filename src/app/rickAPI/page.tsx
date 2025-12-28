// app/components/CharacterList.tsx
'use client';

import { useState, useEffect } from 'react';
import { Character, ApiResponse } from '@/app/rickAPI/APIParts/types';
import { getCharacters } from '@/app/rickAPI/APIParts/APIService';
import '@/styles/rickAPI.css'
export default function CharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState<ApiResponse['info'] | null>(null);

    useEffect(() => {
        fetchCharacters();
    }, [page]);

    async function fetchCharacters() {
        try {
            setLoading(true);
            setError(null);

            const data = await getCharacters(page);
            setCharacters(data.results);
            setInfo(data.info);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed');
        } finally {
            setLoading(false);
        }
    }

    if (loading && characters.length === 0) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="flex_box">
                {characters.map((character) => (
                    <div key={character.id} className="cart">
                        <img src={character.image} alt={character.name} className="image" />
                        <h3 className="name">{character.name}</h3>
                        <p>{character.species} - {character.status}</p>
                    </div>
                ))}
            </div>

            {info && (
                <div className="pagination_box">
                    <button
                        onClick={() => setPage(p => p - 1)}
                        disabled={!info.prev}
                        className="prev"
                    >
                        Previous
                    </button>
                    <span className="py-2">Page {page} of {info.pages}</span>
                    <button
                        onClick={() => setPage(p => p + 1)}
                        disabled={!info.next}
                        className="next"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}