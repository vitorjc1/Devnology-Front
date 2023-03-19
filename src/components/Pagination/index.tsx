import React from "react";
import { PaginationButton } from "./styles";

export const Pagination = ({
  pages,
  setCurrentPage,
}: {
  setCurrentPage: any;
  pages: number;
}) => {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => {
        return (
          <PaginationButton
            className="paginationButton"
            key={index}
            value={index}
            onClick={(e) =>
              setCurrentPage(Number((e.target as HTMLInputElement).value))
            }
          >
            {index + 1}
          </PaginationButton>
        );
      })}
    </div>
  );
};
