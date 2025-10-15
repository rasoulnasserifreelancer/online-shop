import { useState, type FormEvent, useEffect } from "react";
import {
  type FormUserData,
  type Login,
  type LoginResponse,
} from "../types/types";
import { signUpLogin } from "../services/apiClient";
import { useAppDispatch } from "../hooks/hooks";
import { loginAction } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router";

export default function Login() {
  const [form, setForm] = useState<FormUserData<Login>>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (form) {
      signUpLogin<LoginResponse, Login>(
        "https://api.escuelajs.co/api/v1/auth/login",
        form
      )
        .then((res) => {
          dispatch(loginAction.addUser(res));
          navigate("/cart");
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(!loading);
        });
    }
  }, [form]);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    setLoading(!loading);
    setError(null);
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    setForm(formData as FormUserData<Login>);
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-[100vh]">
        <form
          onSubmit={handleSubmitForm}
          className="bg-gray-200 p-3.5 rounded-2xl min-w-2/4 min-h-2/4 flex flex-col justify-evenly shadow-md shadow-gray-400"
        >
          <h2 className="text-center font-sans font-bold tracking-wider text-2xl">
            Login Page
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              className="p-1.5 border-1 bg-amber-50 rounded-2xl"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="p-1.5 border-1 bg-amber-50 rounded-2xl"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          {error ? (
            <p className="text-center mt-0.5 text-red-700">{error.message}</p>
          ) : (
            ""
          )}
          <div className="text-center mt-1.5">
            <button
              className="bg-gray-500 px-6.5 py-2.5 disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed text-amber-50 rounded-xl hover:bg-gray-700 tracking-widest"
              disabled={loading}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
