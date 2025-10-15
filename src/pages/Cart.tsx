import { cartAction } from "../redux/slices/cartSlice";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Button from "../components/button";
export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-center font-sans font-bold tracking-wider text-2xl my-4.5">
          Your Cart Items
        </h2>
        <div className="grid">
          {cartItems.length === 0 ? (
            <h3 className="text-center font-sans font-bold tracking-wider text-2xl my-2.5">
              Your Cart Is Empty For Now !!
            </h3>
          ) : (
            <table className="border p-0.5 border-spacing-y-2 max-w-11/12 mx-auto">
              <thead>
                <tr className="grid grid-cols-6 divide-x divide-gray-300 border-b-2 border-b-gray-200 pb-1">
                  <th>Title</th>
                  <th>Categoty</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    className="grid grid-cols-6 items-center justify-center divide-x divide-gray-300 border-b-2 border-b-gray-200 pb-1"
                    key={item.id}
                  >
                    <td className="text-center">{item.title}</td>
                    <td className="text-center">{item.category.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="flex items-center justify-center">
                      <LuMinus
                        color="red"
                        fontSize={18}
                        onClick={() => dispatch(cartAction.decrease(item.id))}
                      />
                      {item.count}
                      <LuPlus
                        color="green"
                        fontSize={18}
                        onClick={() => dispatch(cartAction.increase(item.id))}
                      />
                    </td>
                    <td className="text-center">{item.count * item.price} $</td>
                    <td className="flex items-center justify-center">
                      <Button
                        type="REMOVE"
                        onClick={() => dispatch(cartAction.delete(item.id))}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <p className="my-4 text-center">
          The Total Cart Value is :{" "}
          <span className="font-bold">
            {cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0)}{" "}
            $
          </span>
        </p>
      </div>
    </>
  );
}
