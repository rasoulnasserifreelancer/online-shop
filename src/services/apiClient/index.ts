import {
  type Category,
  type FormUserData,
  type GetFunction,
  type Product,
} from "../../types/types";

export const getAllProducts: GetFunction<Promise<Product[]>> = async (
  url: string
) => {
  try {
    let response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
};

export const getSingleProduct: GetFunction<Promise<Product>> = async (
  url: string
) => {
  try {
    let response = await fetch(url);
    console.log("response")
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
};


export const signUpLogin = async <T,K>(url: string, user: FormUserData<K>):Promise<T> => {
  try {
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      let result = await response.json();
      return result;
    } else {  
      console.log(response)
      throw new Error(`an error with ${response.status} status came up`);
    }
  } catch (error) {
    if (error instanceof Error) {
    throw new Error(`${error.message}`);
    }
    throw new Error("something went wrong");
  }
};


export const getAllCategories:GetFunction<Promise<Category[]>> = async  (url:string)  => {
    try {
    let response = await fetch(url);
    console.log("response")
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }

} 