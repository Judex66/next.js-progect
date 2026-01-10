// components/CharacterModal.tsx
'use client';

import { Character } from './types';
import '@/styles/modal.css'
interface CharacterModalProps {
    isOpen: boolean;
    onClose: () => void;
    character: Character | null;
}

export default function CharacterModal({ isOpen, onClose, character }: CharacterModalProps) {
    if (!isOpen || !character) return null;

    return (
        <div className="modal_box">
            <div className="content_box">

                    <div >
                        <img className="character_img"
                            src={character.image}
                            alt={character.name}
                        />
                    </div>

                    {/* Content */}
                    <div className="content">
                        <div className="name_box">
                            <h2 className='name'>{character.name}</h2>
                            <button
                                onClick={onClose}
                                className="close_button"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full mr-3 ${character.status === 'Alive' ? 'bg-green-500' :
                                    character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
                                    }`} />
                                <span>Status:</span>
                                <span>{character.status}</span>
                            </div>

                            <div>
                                <span>Species:</span>
                                <span>{character.species}</span>
                            </div>

                            <div>
                                <span>Gender:</span>
                                <span>{character.gender}</span>
                            </div>
                            <div>
                                <span>Origin:</span>
                                <span>{character.origin.name}</span>
                            </div>

                            <div>
                                <span>Location:</span>
                                <span>{character.location.name}</span>
                            </div>
                            <div>
                                <span>Episodes:</span>
                                <span>{character.episode.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}