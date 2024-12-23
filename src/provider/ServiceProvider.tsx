import { createContext, ReactNode } from "react";
import { GifService } from "../services/GifServiceImpl";
import { StorageService } from "../services/StorageServiceImpl";

interface GifProviderProps {
  children: ReactNode;
}

export default function ServiceProvider({ children }: GifProviderProps) {
  const gifService = new GifService();
  const storageService = new StorageService();
  return (
    <ServiceContext.Provider value={{ gifService, storageService }}>
      {children}
    </ServiceContext.Provider>
  );
}

interface ServiceContextType {
  gifService: GifService;
  storageService: StorageService;
}

export const ServiceContext = createContext<ServiceContextType | null>(null);
