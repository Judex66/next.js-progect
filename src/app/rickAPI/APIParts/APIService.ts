import { ApiResponse } from '@/app/rickAPI/APIParts/types';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(page: number = 1): Promise<ApiResponse> {
  const res = await fetch(`${API_BASE_URL}/character?page=${page}`);
  
  if (!res.ok) {
    throw new Error('Failed');
  }
  
  return res.json();
}
export async function characterFilter(name: string) {
  const res = await fetch(`${API_BASE_URL}/character/?name=${name}`);
  
  if (!res.ok) {
    throw new Error('Failed');
  }
  
  return res.json();
}
export async function getCharacter(id: number) {
  const res = await fetch(`${API_BASE_URL}/character/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed');
  }
  
  return res.json();
}