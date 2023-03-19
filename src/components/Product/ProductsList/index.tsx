import { TitleText } from "../../Typography";
import { PaginationDiv, ProductList, ProductsContainer } from "./styles";
import { useEffect, useState } from "react";
import { Product } from "../../../interfaces/Product";
import { ProductCard } from "../ProductCard";
import { axiosInstance } from "../../../utils/axiosInstance";
import { SearchInput } from "../SearchInput";
import { Pagination } from "../../Pagination";
import { PaginationSelector } from "../../PaginationSelector";

export function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageNumbers: any = [];

  const pages = Math.ceil(products.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    async function getProducts() {
      await axiosInstance.get("/product").then((response) => {
        setProducts(response.data);
      });
    }
    getProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [productsPerPage]);

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // reset page number when new search term is entered
  };

  return (
    <ProductsContainer className="container">
      <TitleText size="l" color="subtitle">
        Our products
      </TitleText>
      <SearchInput handleSearch={handleSearch} searchTerm={searchTerm} />
      <br />
      <PaginationSelector
        productsPerPage={productsPerPage}
        setProductsPerPage={setProductsPerPage}
      />
      <ProductList>
        {currentProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductList>
      <br />
      <PaginationDiv>
        <Pagination setCurrentPage={setCurrentPage} pages={pages} />
      </PaginationDiv>
    </ProductsContainer>
  );
}
