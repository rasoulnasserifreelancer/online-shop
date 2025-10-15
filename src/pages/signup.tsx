import { useState, useEffect } from "react";
import { signUpLogin } from "../services/apiClient";
import type { FormUserData, SingUpResponse, User } from "../types/types";
import { useNavigate } from "react-router";

export default function SingUp() {
  const [form, setForm] = useState<FormUserData<User>>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (form) {
      signUpLogin<SingUpResponse, User>(
        "https://api.escuelajs.co/api/v1/users/",
        form!
      )
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => {
          setLoading(!loading);
        });
    }
  }, [form]);

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    setLoading(!loading);
    setError(null);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);
    setForm(formObject as FormUserData<User>);
  }

  console.log(form);

  return (
    <>
      <div className="flex items-center justify-center w-full h-[100vh]">
        <form
          className="bg-gray-200 gap-3.5 p-3.5 rounded-2xl min-w-2/4 min-h-2/4 flex flex-col justify-evenly shadow-md shadow-gray-400"
          onSubmit={handleSubmitForm}
        >
          <h2 className="text-center font-sans font-bold tracking-wider text-2xl">
            Sign Up Form
          </h2>

          <div className="flex flex-col">
            <label htmlFor="name">name</label>
            <input
              className="p-1.5 border-1 bg-amber-50 rounded-2xl"
              type="text"
              id="name"
              name="name"
              required
              placeholder="Jhon"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="avatar">avatar</label>
            <input
              className="p-1.5 border-1 bg-amber-50 rounded-2xl"
              type="text"
              id="avatar"
              name="avatar"
              required
              placeholder="https://i.imgur.com/LDOO4Qs.jpg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Email">email</label>
            <input
              className="p-1.5 border-1 bg-amber-50 rounded-2xl"
              type="email"
              id="Email"
              name="email"
              required
              placeholder="john@mail.com"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              className="p-1.5 border-1 bg-amber-50 rounded-2xl"
              type="password"
              id="password"
              name="password"
              required
              placeholder="changeme"
            />
          </div>

          <div className="text-center mt-1.5">
            <button
              className="bg-gray-400 px-6.5 py-2.5 text-amber-50 rounded-xl disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-700 tracking-widest"
              disabled={loading}
            >
              SignUp
            </button>
          </div>

          {error ? (
            <p className="text-center mt-0.5 text-red-700">{error.message}</p>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}
