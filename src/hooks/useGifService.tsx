import { useContext } from "react";
import { ServiceContext } from "../services/GifServiceImpl";

export const useGifService = () => {

  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(
      "useUserService debe usarse dentro de un UserServiceProvider"
    );
  }
  return context;
};
