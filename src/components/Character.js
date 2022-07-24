import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import IndiCharacter from "./IndiCharacter";

const Character = () => {
  const [page, setPage] = useState(1);
  const fetchCharacter = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacter,
    {
      keepPreviousData: true,
    }
  );

  console.log(data);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <IndiCharacter character={character} />
      ))}
      <div>
        <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
          Previous
        </button>
        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Character;
