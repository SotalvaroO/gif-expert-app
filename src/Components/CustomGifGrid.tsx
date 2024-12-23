import Masonry from "react-masonry-css";
import { GifModel } from "../services/GifServiceImpl";
import "./styles.css";

interface CustomGridModel {
  gifs: GifModel[];
}

export const CustomGifGrid = ({ gifs }: CustomGridModel) => {
  const breakpoints = {
    default: 4,
    1280: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="flex  w-auto"
        columnClassName="px-2"
      >
        {gifs.map((gif, index) => (
          <div key={index} className="mb-3 rounded-lg overflow-hidden">
            <img
              src={gif?.response}
              alt={gif?.response}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Masonry>
    </>
  );
};
