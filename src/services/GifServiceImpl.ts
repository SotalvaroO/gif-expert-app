import { Dispatch, SetStateAction } from "react";

export interface GifSearchModel {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
  setHasMore: Dispatch<SetStateAction<boolean>>;
}

export interface GifRecord {
  name: string;
  gifs?: GifModel[];
}

export interface GifModel {
  key?: string;
  response: string;
}

export class GifService {
  private apiKey = import.meta.env.VITE_GIPHY_API_KEY; // Reemplaza con tu API Key de Giphy
  private baseUrl = "https://api.giphy.com/v1/gifs";

  public async fetchTrendingGifs({
    page = 0,
    setHasMore,
    setPage,
  }: GifSearchModel): Promise<GifModel[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await fetch(
        `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=28&offset=${page}`
      );
      if (!response.ok) {
        throw new Error(`Error al buscar GIFs: ${response.statusText}`);
      }
      setPage((prev) => prev + 1);
      const data = await response.json();

      if (data.data.length < 15) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      // Mapea los resultados a tu modelo GifModel
      return data.data.map((gif: any) => ({
        response: gif.images?.original?.url,
      }));
    } catch (error) {
      console.error(error);
      throw new Error("No se pudieron obtener los GIFs");
    }
  }

  public async fetchGifs(
    name: string,
    { page = 0, setHasMore, setPage }: GifSearchModel
  ): Promise<GifModel[]> {
    // Simula un delay de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await fetch(
        `${this.baseUrl}/search?api_key=${this.apiKey}&q=${encodeURIComponent(
          name
        )}&limit=28&offset=${page}`
      );
      if (!response.ok) {
        throw new Error(`Error al buscar GIFs: ${response.statusText}`);
      }

      setPage((prev) => prev + 1);
      const data = await response.json();

      if (data.data.length < 15) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      // Mapea los resultados a tu modelo GifModel
      return data.data.map((gif: any) => ({
        response: gif.images?.original?.url,
      }));
    } catch (error) {
      console.error(error);
      throw new Error("No se pudieron obtener los GIFs");
    }
  }
}
