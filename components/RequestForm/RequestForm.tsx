import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import { fetchAPI } from "@/utils/apinetwork";
import ResponseField from "../ResponseTab/ResponseField";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { IAxiosResponse } from "@/typescript/interface/api";
import RequestParams from "../RequestParams";
import { inputLabelClasses } from "@mui/material/InputLabel";

export type TState = {
  url: string;
};
const RequestForm = () => {
  const [urlstate, setUrlState] = React.useState<TState>({
    url: "",
  });

  const [apiResp, setApiResp] = useState<IAxiosResponse>();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUrlState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = await fetchAPI(urlstate);
    setApiResp(value);
    console.log(value);
  };

  return (
    <>
      <Typography sx={{ my: 5 }}>Fetch Your API Response</Typography>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", marginBottom: "40px" }}>
          {/* <select {...register('method')}> */}
          <Select
            defaultValue={"GET"}
            sx={{ backgroundColor: "whitesmoke", color: 'black', width: "10%" }}
          >
            <MenuItem value={"GET"}>GET</MenuItem>
            <MenuItem value="POST">POST</MenuItem>
            <MenuItem value="PUT">PUT</MenuItem>
            <MenuItem value="PUT">DELETE</MenuItem>
            {/* Add other HTTP methods as needed */}
          </Select>
          <TextField
            id="outlined-size-small"
            type="text"
            name="url"
            value={urlstate.url}
            onChange={handleChange}
            // {...register("url", { required: true })}
            // defaultValue={'https://fakestoreapi.com/products'}
            sx={{
              backgroundColor: "#d1e8f0",
              mx: 2,
              borderRadius: 2,
              width: "60%",
            }}
            InputProps={{
              sx:{
                color:'black'
              }
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "10%", backgroundColor: "orange" }}
          >
            Send <SendIcon sx={{ ml: 1 }} />
          </Button>
        </div>

        {/* <div style={{ display: 'flex' }}>
          <label>
            Headers (JSON):
            <textarea {...register('headers')} />
          </label>
          <label>
            Query Parameters (JSON):
            <textarea {...register('queryParams')} />
          </label>
          <label>
            JSON Data:
            <textarea {...register('jsonData')} />
          </label>
        </div> */}

        <RequestParams urlstate={urlstate} setUrlState={setUrlState} />

        <Box>
          <Typography sx={{ my: 3, fontWeight: "bold" }}>Headers</Typography>
          <TextField
            id="outlined-basic"
            label="X-ACCESS TOKEN"
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
              sx:{
                color:'black'
              }
            }}
          />
          <TextField
            id="outlined-basic"
            label="VALUE"
            variant="outlined"
            sx={{ backgroundColor: "#f2f6f7", color: 'black' }}
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
              sx:{
                color:'black'
              }
            }}
          />
          <Button
            size="small"
            variant="contained"
            sx={{ ml: 2, height: 50, backgroundColor: "orange" }}
          >
            Add
          </Button>
          <Box>
            <Typography sx={{ my: 3, fontWeight: "bold" }}>JSON</Typography>

            <TextareaAutosize id="outlined-basic" minRows={4} />
            <Button
              size="small"
              variant="contained"
              sx={{ ml: 2, mb: 4, backgroundColor: "orange" }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </form>

      <ResponseField response={apiResp} />
    </>
  );
};

export default RequestForm;
