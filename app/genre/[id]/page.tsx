type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  }
}

const GenrePage = ({params: { id }, searchParams: { genre }}: Props) => {
  console.log('~~id:', id, '~~genre:', genre);
  return (
    <div>
      Welcome to your genre with ID: {id} and name: {genre};
    </div>
  );
};

export default GenrePage;