import { notFound } from "next/navigation";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import MovieCarousel from "@/components/MovieCarousel";

type Props = {
  params: {
    term: string;
  }
}

const SearchPage = async ({params: { term }}: Props) => {
  const termToUse = decodeURI(term);
  // If no term it returns not found page
  if (!term) notFound();

  // API call to get the Search Movies
  const movies = await getSearchMovies(termToUse);

  // API call to get the Popular Movies
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 lg:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MovieCarousel title="Movies" movies={movies} isVertical/>
        <MovieCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
};

export default SearchPage;