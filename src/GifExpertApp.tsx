import { useEffect, useState } from "react";
import CustomSkeleton from "./Components/CustomSkeleton";
import CustomSearchBar from "./CustomSearchBar";
import { useGifService } from "./hooks/useGifService";
import { CustomGifGrid } from "./Components/CustomGifGrid";
import { GifModel } from "./services/GifServiceImpl";

export const GifExpertApp = () => {
  const gifService = useGifService();
  const [gifs, setGifs] = useState<GifModel[] | null>(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value); // Actualiza el estado con el valor del input
  };

  const handleButtonClick = () => {
    if (searchValue.trim() !== "") {
      setGifs(null);
      gifService
        .fetchGifs(searchValue)
        .then(setGifs)
        .catch((err) => console.error("Error fetching GIFs:", err))
        .finally(() => setIsButtonClicked(false));
    } else {
      console.warn("El valor de búsqueda está vacío.");
    }
  };

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Gifs App</h1>
      </section>
      <section className="container mx-auto px-4">
        <CustomSearchBar
          onSearchChange={handleSearchChange}
          onButtonClick={handleButtonClick}
        />
      </section>
      <section className="container mx-auto">
        {gifs?.length ? <CustomGifGrid gifs={gifs} /> : <CustomSkeleton />}
      </section>
    </>
  );
};
