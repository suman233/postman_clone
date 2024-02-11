import RequestForm from "@/components/RequestForm/RequestForm";
import { Container, Typography } from "@mui/material";
import React from "react";

const workspaces = () => {
  return (
    <div>
      <Container>
        <Typography sx={{ my: 5 }}>Your Workspaces </Typography>
          <RequestForm />
      </Container>
    </div>
  );
};

export default workspaces;
