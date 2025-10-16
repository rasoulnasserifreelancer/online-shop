import { getAllCategories, getAllProducts } from "../services/apiClient";
import { type Category, type Product } from "../types/types";
import { useEffect, useState } from "react";
import ProductItem from "../components/productItem";
import Loading from "../components/loading";
import PaginationControlled from "../components/Pagination";

export default function Products() {
  const [products, setProducts] = useState<Product[]>();
  const [selectedCat, setSelectedCat] = useState<Category>();
  const [allCats, setAllCats] = useState<Category[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    getAllProducts("https://api.escuelajs.co/api/v1/products").then(
      (products) => setProducts(products)
    );
    getAllCategories("https://api.escuelajs.co/api/v1/categories").then(
      (categories) => setAllCats(categories)
    );
  }, []);

  if (!products) {
    return <Loading />;
  }

  const filtredProducts = products
    .filter((product) => product.title.includes(searchTerm.toLowerCase()))
    .filter((product) => {
      if (selectedCat) {
        return product.category.id === selectedCat.id;
      } else {
        return product;
      }
    });

  console.log(filtredProducts.length)

  
  return (
    <>
      <div className="flex flex-col justify-between items-center mx-1.5 my-5.5 gap-3.5">
        <div className="flex flex-col gap-3.5 items-center">
        <input
          className="border border-gray-400 rounded-md p-2 mb-2.5 max-w-80 min-w-72"
          type="text"
          placeholder="serach category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="flex flex-wrap gap-1.5 flex-1 items-center justify-center">
          <li
            className={ "border rounded-2xl border-gray-400 p-1.5 hover:bg-gray-400 hover:text-white " + (!selectedCat ? " font-bold border-2" : " ") }
            onClick={() => setSelectedCat(undefined)}
          >
            All Products
          </li>
          {allCats?.map((cat) => (
            <li
              onClick={() => {setSelectedCat(cat)
                console.log(cat.id)
                console.log(selectedCat?.id)
              }}
              className={ "border rounded-2xl border-gray-400 p-1.5 hover: hover:bg-gray-400 hover:text-white  " + ((cat.id === selectedCat?.id) ? "font-bold border-2" : " ") }
              key={cat.id}
            >
              {cat.name}
            </li>
          ))}
        </ul>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 justify-center">
          {filtredProducts.slice((page-1)*6, page*6).map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </ul>
        <div>
          <PaginationControlled page={page} setPage={setPage} count={Math.ceil(filtredProducts.length/6)}/>
        </div>
      </div>
    </>
  );
}
"= "
