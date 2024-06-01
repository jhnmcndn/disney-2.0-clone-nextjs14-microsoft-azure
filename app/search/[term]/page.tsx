import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  }
}

const SearchPage = ({params: { term }}: Props) => {
  const termToUse = decodeURI(term);
  // If no term it returns not found page
  if (!term) notFound();

  // API call
  // API call
  return (
    <div>
      Welcome to the search page: {termToUse}
    </div>
  );
};

export default SearchPage;