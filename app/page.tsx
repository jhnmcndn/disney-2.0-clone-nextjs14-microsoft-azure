import MovieCarousel from "@/components/MovieCarousel";

const Home = async () => {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await gettopRatedMovies();
  const popularMovies = await getpopularMovies();

  return (
    <main className="">
      {/*<CarouselBannerWrapper/>*/}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel movies={[]} title="Upcoming" />
        {/*<MovieCarousel movies={} title={} />*/}
        {/*<MovieCarousel movies={} title={} />*/}
      </div>
    </main>
  );
}

export default Home;