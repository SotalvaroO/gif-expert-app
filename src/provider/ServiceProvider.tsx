import { ReactNode } from "react";
import { GifService, ServiceContext } from "../services/GifServiceImpl";

interface GifProviderProps {
  children: ReactNode;
}

export default function ServiceProvider({ children }: GifProviderProps) {
  const userService = new GifService();
  return (
    <ServiceContext.Provider value={userService}>
      {children}
    </ServiceContext.Provider>
  );
}
