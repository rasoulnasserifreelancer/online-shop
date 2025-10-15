export interface Product {
  id: number;
  title: string;
  count: number;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
}
export interface state {
  cartReducer: Product[];
}

export interface GetFunction<T> {
  (url: string): T;
}

export interface User {
  name: FormDataEntryValue;
  avatar: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export type FormUserData<T> = {
  [index in keyof T]: FormDataEntryValue;
};

export type SingUpResponse = {
  avatar: string;
  creationAt: string;
  email: string;
  id: number;
  name: string;
  password: string;
  role: string;
  updatedAt: string;
};

export type Login = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
};


export type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};
