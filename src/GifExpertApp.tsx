import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CustomSkeleton from "./Components/CustomSkeleton";
import CustomSearchBar from "./Components/CustomSearchBar";
import { useService } from "./hooks/useService";
import { CustomGifGrid } from "./Components/CustomGifGrid";
import { GifModel } from "./services/GifServiceImpl";
import { CustomHistory } from "./Components/CustomHistory";
import InfiniteScroll from "react-infinite-scroll-component";

interface InfiniteScrollModel {
  page: number;
  setGifs: Dispatch<SetStateAction<GifModel[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  setHasMore: Dispatch<SetStateAction<boolean>>;
}

export const GifExpertApp = () => {
  const gifService = useService().gifService;
  const storageService = useService().storageService;
  const [gifs, setGifs] = useState<GifModel[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [previousTerm, setPreviousTerm] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value); // Actualiza el estado con el valor del input
  };

  useEffect(() => {
    gifService
      .fetchTrendingGifs({ setHasMore, setPage })
      .then(setGifs)
      .catch((err) => console.error("Error fetching GIFs:", err));
  }, []);

  const [title, setTitle] = useState("Trending");

  const handleButtonClick = () => {
    if (searchValue === previousTerm) return;
    setPreviousTerm(searchValue);
    if (searchValue.trim() !== "") {
      setTitle(searchValue);
      setGifs([]);
      gifService
        .fetchGifs(searchValue, { setHasMore, setPage })
        .then(setGifs)
        .catch((err) => console.error("Error fetching GIFs:", err));

      storageService.addItem(searchValue, JSON.stringify(gifs));
    } else {
      console.warn("El valor de búsqueda está vacío.");
    }
  };
  const handleHistoryClick = (value: string) => {
    setTitle(value);
    setSearchValue(value);
    setGifs([]);
    gifService
      .fetchGifs(value, { setHasMore, setPage })
      .then(setGifs)
      .catch((err) => console.error("Error fetching GIFs:", err));
    storageService.addItem(searchValue, JSON.stringify(gifs));
  };
  const fetchNextImages =
    ({ setGifs, setPage, setHasMore }: InfiniteScrollModel) =>
    async () => {
      const images =
        title === "Trending"
          ? await gifService.fetchTrendingGifs({
              setPage,
              setHasMore,
            })
          : await gifService.fetchGifs(searchValue, {
              setPage,
              setHasMore,
            });

      setGifs((prev) => prev.concat(images));
    };
  const Loader = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
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
      <div className="container grid grid-cols-4 w-full mx-auto px-4">
        <section className="col-span-1">
          <CustomHistory
            keys={storageService.getItemKeys()}
            onClick={handleHistoryClick}
          />
        </section>
        <section className="col-span-3">
          <h1 className="text-4xl font-bold mb-8 text-start px-4">{title}</h1>
          {gifs?.length ? (
            <InfiniteScroll
              next={fetchNextImages({
                page,
                setGifs,
                setPage,
                setHasMore,
              })}
              dataLength={gifs.length}
              hasMore={hasMore}
              loader={<Loader />}
            >
              <CustomGifGrid gifs={gifs} />
            </InfiniteScroll>
          ) : (
            <CustomSkeleton />
          )}
        </section>
      </div>
    </>
  );
};
