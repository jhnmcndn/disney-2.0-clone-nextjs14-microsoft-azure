type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
}

const MovieCarousel = ({ title, movies, isVertical }: Props) => {
  return (
    <div className="z-50">
      <h2>{title}</h2>
    </div>
  );
};

export default MovieCarousel;