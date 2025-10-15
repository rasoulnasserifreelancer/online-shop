import { useNavigate } from "react-router";
import image from "../assets/images/image.png"
import Button from "../components/button";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="min-h-screen flex flex-col justify-evenly">

    <div className="md:flex-row justify-around flex flex-col items-center mt-5">
      <h1 className="text-3xl font-bold md:self-center md:mb-28 mb-10">
        Make your Outfit wonderful
      </h1>
      <img className="max-w-2/6 rounded-2xl shadow-lg" src={image} alt=" hero Image" />
    </div>
      <div className="flex flex-col items-center justify-center gap-4.5 ml-0.5 mt-6.5 ">
        <div className="flex gap-2.5 basis-1.5 [&>*]:flex-1 min-w-4/12 min-h-12">
          <Button type="READ" onClick={() => navigate("/about")}>
            Learn More
          </Button>
          <Button type="READ" onClick={() => navigate("/products")}>
            Start Shopping
          </Button>
        </div>
        <div className="md:mb-3">
          <p>
            This shop webpage built with React and Redux offers a dynamic,
            responsive, and highly maintainable user experience. React handles
            the component-based UI, allowing for modular design—such as reusable
            product cards, filters, and shopping cart elements—while Redux
            manages the global state, ensuring consistent data flow across the
            application. For example, when a user adds an item to their cart,
            Redux instantly updates the cart state, which reflects across all
            relevant components without prop drilling. This architecture is
            especially powerful for handling asynchronous actions like fetching
            product data from an API or processing checkout logic, thanks to
            middleware like Redux Thunk or Redux Saga. The result is a seamless
            shopping experience that’s scalable and easy to debug, perfect for
            modern e-commerce platforms.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
