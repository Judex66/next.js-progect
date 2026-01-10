'use client';

import { useState, useEffect } from 'react';
import { Character, ApiResponse } from '@/app/rickAPI/APIParts/types';
import { getCharacters, characterFilter } from '@/app/rickAPI/APIParts/APIService';
import '@/styles/rickAPI.css'
import CharacterModal from './APIParts/Modal';
export default function CharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState<ApiResponse['info'] | null>(null);
    const [search, setSearch] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    useEffect(() => {
        fetchCharacters();
    }, [page]);
    useEffect(() => {
        searchCharacter();
    }, [search]);
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
    async function searchCharacter() {
        try {
            setLoading(true);
            setError(null);
            setPage(1);
            const data = await characterFilter(search);
            setCharacters(data.results);
            setInfo(data.info);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed');
        } finally {
            setLoading(false);
        }

    }
    const openCharacterModal = (character: Character) => {
        setSelectedCharacter(character);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCharacter(null);
    };
    if (loading && characters.length === 0) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="searchBox">
                <input type="text" className='inputSearch' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="flex_box">
                {characters.map((character) => (
                    <div key={character.id} className="cart">
                        <img src={character.image} alt={character.name} className="image" />
                        <h3 onClick={() => openCharacterModal(character)} className="name">{character.name}</h3>
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
            <CharacterModal
                isOpen={isModalOpen}
                onClose={closeModal}
                character={selectedCharacter}
            />

        </div>

    );
}