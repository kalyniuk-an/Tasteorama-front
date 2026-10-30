'use client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import { useState } from 'react';

import RecipesList from '@/components/RecipesList/RecipesList';
import { fetchRecipes, type FetchRecipesRecponse } from '@/lib/api';

export default function Recipes() {
  
  const { data } = useQuery<FetchRecipesRecponse>({
    queryKey: ['recipes', 1, 12],
    queryFn: () => fetchRecipes({ page:1, perPage: 12}),
    placeholderData: keepPreviousData
  });

 
  return (
    <RecipesList recipes={data?.recipes ?? []}/>
  )
}
