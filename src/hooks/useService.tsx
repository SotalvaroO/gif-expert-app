import { useContext } from "react";
import { ServiceContext } from "../provider/ServiceProvider";


export const useService = () => {

  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(
      "useUserService debe usarse dentro de un UserServiceProvider"
    );
  }
  return context;
};
