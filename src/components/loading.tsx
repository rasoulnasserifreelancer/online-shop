import { ImSpinner2 } from "react-icons/im";
export default function Loading() {
  return (
    <>
    <div className="w-full h-full absolute flex items-center justify-center">
        <ImSpinner2 className="animate-spin" size={80} />
    </div>
    </>
  )
}
