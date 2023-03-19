import React from "react";

export const PaginationSelector = ({
  productsPerPage,
  setProductsPerPage,
}: {
  productsPerPage: number;
  setProductsPerPage: any;
}) => {
  return (
    <div>
        Itens per page:
      <select
        value={productsPerPage}
        onChange={(e) => setProductsPerPage(Number(e.target.value))}
      >
        <option value={8}>8</option>
        <option value={15}>15</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};
