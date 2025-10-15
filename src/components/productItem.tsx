import type { Product } from "../types/types";
import Button from "./button";
import { cartAction } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router";
import { useAppSelector } from "../hooks/hooks";
import { useAppDispatch } from "../hooks/hooks";

export default function ProductItem({
  id,
  title,
  price,
  description,
  category,
  images,
  count,
  slug,
}: Product) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginState = useAppSelector((state) => state.loginReducer);

  function handleNavigate() {
    navigate(`/product/${id}`);
  }

  function handleAddToCart({
    id,
    title,
    price,
    description,
    category,
    images,
    count,
    slug,
  }: Product) {
    if (!loginState.access_token) {
      console.log("navigation");
      return navigate("/login");
    }

    dispatch(
      cartAction.add({
        id,
        title,
        price,
        description,
        category,
        images,
        count,
        slug,
      })
    );
  }

  return (
    <>
      <article className="flex flex-col gap-2 p-4 shadow-sm shadow-gray-400 hover:translate-0.5 rounded-md inset-shadow-sm hover:mask-r-from-80% max-w-2xl" key={id}>
        <img src={images?.[0]} alt="" />
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-800">
          {description.substring(0, 12)}...{" "}
          <Button type="READ" onClick={handleNavigate}>
            Read More
          </Button>
        </p>
        <span>{category.name}</span>
        <p>Price : {price} $</p>
        <div className="flex justify-center">
        <Button
          type="ADD"
          onClick={() =>
            handleAddToCart({
              id,
              title,
              price,
              description,
              category,
              images,
              count,
              slug,
            })
          }
        >
          Add To Cart
        </Button>
        </div>
      </article>
    </>
  );
}
