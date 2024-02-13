import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";

type Props = {
  setJsonData: React.Dispatch<React.SetStateAction<string>>;
};

const RequestBody = ({ setJsonData }: Props) => {
  return (
    <Box sx={{ my: 2 }}>
      <Box>
        <Typography sx={{ my: 3, fontWeight: "bold" }}>JSON</Typography>

        <TextareaAutosize
          id="outlined-basic"
          minRows={4}
          placeholder="Provide JSON Body"
          onChange={(e) => setJsonData(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default RequestBody;
