import React from "react";
import Recipes from './Recipes.client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchRecipes } from "@/lib/api";

const RecipesPage = async () => {
  const queryClient = new QueryClient();
  const search = '';
  const page = 1;
  // const perPage = 12;
  await queryClient.prefetchQuery({
    queryKey: ["recipes", search, page],
    queryFn: () => fetchRecipes({ page, search }),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Recipes />
    </HydrationBoundary>
  )
};

export default RecipesPage; 