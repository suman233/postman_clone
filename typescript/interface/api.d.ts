import { AxiosHeaders, RawAxiosRequestHeaders } from "axios";

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

export type IAxiosResponse = {
  data: Product[];
  headers: Partial<RawAxiosRequestHeaders & AxiosHeaders>;
  status: number;
};

export type PostApiType = {
  method: string;
  url: string;
  jsonData: string;
};