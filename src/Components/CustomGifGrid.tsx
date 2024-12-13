import { GifModel } from "../services/GifServiceImpl";


interface CustomGridModel {
  gifs: GifModel[];
}

export const CustomGifGrid = ({ gifs }: CustomGridModel) => {
  return (
    <div className="columns-4 gap-3 px-4">
      {gifs.map((gif, index) => (
        <div key={index} className="mb-3 rounded-lg overflow-hidden">
          <img src={gif?.response} alt={gif?.response} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};