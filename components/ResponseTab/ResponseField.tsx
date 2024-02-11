import { IAxiosResponse } from "@/typescript/interface/api";
import { Container } from "@mui/material";
import React from "react";

type Props = {
  response?: IAxiosResponse;
};
const ResponseField = ({ response }: Props) => {
  if (!response) {
    return (
      <div>
        <Container>
          <p style={{}}>No response available</p>
        </Container>
      </div>
    );
  }
  const { data, status, headers } = response;
  console.log(data);

  return (
    <div>
      <Container>
        <h2>Response</h2>
        <div>Status: {status}</div>
        <div>Data:</div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <div>Headers:</div>
        <pre>{JSON.stringify(headers, null, 2)}</pre>
      </Container>
    </div>
  );
};

export default ResponseField;
