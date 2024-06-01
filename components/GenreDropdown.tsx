import { Genres } from "@/typings";

const GenreDropdown = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 Hours
    }
  }

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;


  console.log('~~data,gebres:', data.genres)



  return (
    <div>
      GenreDropdown
    </div>
  );
};

export default GenreDropdown;