import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";

const Home = async () => {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={topRatedMovies} title="Top Rated" />
        <MovieCarousel movies={popularMovies} title="Popular Movies" />
      </div>
    </main>
  );
}

export default Home;