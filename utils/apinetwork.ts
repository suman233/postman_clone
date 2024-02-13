import { TState } from "@/components/RequestForm/RequestForm";
import { IAxiosResponse, PostApiType } from "@/typescript/interface/api";
import axios from "axios";

export const fetchAPI = async (data: TState): Promise<IAxiosResponse> => {
  try {
    const response = await axios.get(data.url);
    return response;
  } catch (error: any) {
    throw new Error("Error while fetching data", error);
  }
};

export const postAPI = async (data: PostApiType): Promise<IAxiosResponse> => {
  try {
    const config = {
      method: data.method,
      url: data.url,
      data: JSON.parse(data.jsonData) || "",
    };
    const resp = await axios(config);
    return resp;
  } catch (error: any) {
    console.error("Error:", error);
    throw new Error("Error while fetching data", error);
  }
};
