import React from "react";
import { Input } from "../../Input";

type Props = {
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
export const SearchInput: React.FC<Props> = ({ searchTerm, handleSearch }) => {
    return (
      <Input
        type="text"
        placeholder="Serach product"
        value={searchTerm}
        onChange={handleSearch}
      />
    );
  };