import { createContext } from "react";

export interface GifModel {
  response: string;
}

export class GifService {
  private apiKey = import.meta.env.VITE_GIPHY_API_KEY; // Reemplaza con tu API Key de Giphy
  private baseUrl = "https://api.giphy.com/v1/gifs";

  public async fetchGifs(name: string): Promise<GifModel[]> {
    // Simula un delay de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const response = await fetch(
        `${this.baseUrl}/search?api_key=${this.apiKey}&q=${encodeURIComponent(
          name
        )}&limit=28`
      );

      if (!response.ok) {
        throw new Error(`Error al buscar GIFs: ${response.statusText}`);
      }

      const data = await response.json();

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
export const ServiceContext = createContext<GifService | null>(null);
