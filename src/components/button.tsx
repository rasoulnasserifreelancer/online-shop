type ReactNode = React.ReactNode;

export default function Button({
  children,
  onClick,
  type,
}: {
  children: ReactNode;
  onClick: () => void;
  type: "ADD" | "REMOVE" | "READ";
}) {
  return (
    <>
      {type === "ADD" && <button className="max-w-64 grow p-1.5 rounded-xl bg-green-400 text-gray-800 hover:bg-green-600" onClick={onClick}>{children}</button>}
      {type === "READ" && <button className="max-w-64 grow p-1.5 rounded-xl bg-gray-800 text-gray-100 hover:bg-gray-500" onClick={onClick}>{children}</button>}
      {type === "REMOVE" && <button className="max-w-64 grow p-1.5 rounded-xl bg-red-800 text-gray-200 hover:bg-red-500" onClick={onClick}>{children}</button>}
    </>
  );
}
