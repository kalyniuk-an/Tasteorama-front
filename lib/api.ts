// import axios from 'axios';

// const baseURL = process.env.NEXT_PUBLIC_API_URL;

// export const nextServer = axios.create({baseURL})



// import { nextServer } from './api';
import { Recipe } from '@/types/recipe';
import axios from 'axios';

export interface FetchRecipesRecponse{
  recipes: Recipe[];
  totulPeges: number;
}

interface FetchRecipesParams {
  page: number;
  perPage?: 12;
  search?: string;
}

const API_URL = "https://tasteorama-i9vn.onrender.com/resipes";
export async function fetchRecipes(params: FetchRecipesParams): Promise<FetchRecipesRecponse> {
  
  const { page, perPage, search } = params;
  const query: Record<string, unknown> = {
    page,
    perPage
  };
  if (search) {
    query.search = search;
  }
  
  
  // const response = await nextServer.get<FetchRecipesRecponse>('/recipes');
  const response = await axios.get<FetchRecipesRecponse>(`${API_URL}`, { params: query});
  return response.data;
};