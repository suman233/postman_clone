import { Container } from '@mui/material';
import React from 'react';

interface ResponseViewerProps {
  response: any;
}

const ResponseViewer: React.FC<ResponseViewerProps> = ({ response }) => {
  if (!response) {
    return <div>
      <Container>

        <p style={{}}>
          No response available
        </p>
      </Container>
    </div>;
  }

  const { status, data, headers } = response;

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

export default ResponseViewer;