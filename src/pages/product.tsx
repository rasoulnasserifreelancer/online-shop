import type { Product } from "../types/types";
import Button from "../components/button";
import { cartAction } from "../redux/slices/cartSlice";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/apiClient";
import { useAppSelector } from "../hooks/hooks";
import { useAppDispatch } from "../hooks/hooks";
import { useNavigate } from "react-router";
import ImageViewer from "../components/imageViewer";
import Loading from "../components/loading";
export default function Product() {
  const loginState = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();
  const param = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  useEffect(() => {
    getSingleProduct(`https://api.escuelajs.co/api/v1/products/${param.id}`)
      .then((res) => {
        console.log("respone is:", res);
        setProduct(res);
      })
      .catch(() => {
        throw new Error("page not found");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [param.id]);

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

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <div className="flex flex-col my-3.5 mx-1 min-h-screen items-center gap-4 justify-evenly">
        <ImageViewer images={product?.images || []} />
        <div className="flex flex-col gap-1.5 ">
          <h2 className="font-bold mt-1.5">Title : {product?.title}</h2>
          <p className="font-serif text-gray-600">Description : {product?.description}</p>
          <span className="font-light ">Category: {product?.category.name}</span>
          <p>Price : {product?.price} $</p>
<div className="flex justify-center">
          <Button
            type="ADD"
            onClick={() =>
              handleAddToCart({
                id: product!.id,
                title: product!.title,
                price: product!.price,
                description: product!.description,
                category: product!.category,
                images: product!.images,
                count: product!.count,
                slug: product!.slug,
              })
            }
          >
            Add To Cart
          </Button>
</div>
        </div>
      </div>
    </>
  );
}
