import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { inputLabelClasses } from "@mui/material/InputLabel";

const RequestHeaders = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Typography sx={{ my: 3, fontWeight: "bold" }}>Headers</Typography>
      <TextField
        id="outlined-basic"
        label="API KEY"
        variant="outlined"
        sx={{ mr: 2, backgroundColor: "#f2f6f7", color: 'black' }}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "black",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "orange"
                }
              }
            }}
            InputProps={{
              sx: {
                color: 'black'
              }
            }}
      />
      <TextField
        id="outlined-basic"
        label="VALUE"
        variant="outlined"
        sx={{ mr: 2, backgroundColor: "#f2f6f7", color: 'black' }}
        InputLabelProps={{
          sx: {
            // set the color of the label when not shrinked
            color: "black",
            [`&.${inputLabelClasses.shrink}`]: {
              // set the color of the label when shrinked (usually when the TextField is focused)
              color: "orange"
            }
          }
        }}
        InputProps={{
          sx: {
            color: 'black'
          }
        }} />
      <Button
        size="small"
        variant="contained"
        sx={{ ml: 2, height: 50, backgroundColor: "orange" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default RequestHeaders;
