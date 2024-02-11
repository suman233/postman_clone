import { TState } from "@/components/RequestForm/RequestForm";
import { IAxiosResponse } from "@/typescript/interface/api";
import axios from "axios";



export const fetchAPI = async (data: TState): Promise<IAxiosResponse> => {
  try {
    const response = await axios.get(data.url);
    return response;
  } catch (error: any) {
    throw new Error("Error while fetching data", error);
  }
};

// const handleSubmit = async (data: any) => {
//     try {
//         const config: AxiosRequestConfig = {
//             method: data.method || 'GET',
//             url: data.url,
//             headers: JSON.parse(data.headers) || '',
//             params: JSON.parse(data.queryParams) || '',
//             data: JSON.parse(data.jsonData) || '',
//         };
//         const resp = await axios(config)
//         // setResponse(resp.config.data ? resp : Object.assign({}, resp, {config}));
//         setResponse(resp.config)
//         // onSubmit(response.config); // You can pass additional data or manipulate the response here if needed
//         console.log('resp', resp);

//     } catch (error) {
//         setResponse(error);
//         console.error('Error:', error);
//     }
// };
