// import "@/styles/globals.css";
import RequestForm from "@/components/RequestForm/RequestForm";
import ResponseViewer from "@/components/ResponseTab/ResponseField";
import Wrapper from "@/layout/Wrapper/Wrapper";
import axios from "axios";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const [response, setResponse] = useState<any>(null);

  // const handleSubmit = async (data: any) => {
  //   try {
  //     const apiResponse = await axios.get(data.url);
  //     setResponse(apiResponse);
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setResponse(null);
  //   }
  // };
  return (
    <Wrapper>
      
      <Component {...pageProps} />
    </Wrapper>
  )
}
