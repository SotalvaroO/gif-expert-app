import React, { ChangeEvent } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

interface CustomSearchBarModel {
  onSearchChange: (value: string) => void;
  onButtonClick: () => void;
}

export default function CustomSearchBar({
  onSearchChange,
  onButtonClick,
}: CustomSearchBarModel) {
  const handleCustomClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onButtonClick();
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <form className="flex gap-2 mb-8">
      <CustomInput placeholder="Nombre del gif" onChange={handleInput} />
      <CustomButton onClick={handleCustomClick} />
    </form>
  );
}
