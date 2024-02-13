import React, { useMemo, useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import { fetchAPI, postAPI } from "@/utils/apinetwork";
import ResponseField from "../ResponseTab/ResponseField";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { IAxiosResponse } from "@/typescript/interface/api";
import RequestParams from "../RequestParams";
import { inputLabelClasses } from "@mui/material/InputLabel";
import RequestBody from "../RequestBody";
import RequestHeaders from "../RequestHeaders";

export type TState = {
  url: string;
  // params: Record<string, string>
};
const activeCss = {
  padding: "15px 30px",
  marginRight: "15px",
  backgroundColor: "#eee",
  borderRadius: "10px",
  cursor: "pointer",
  color: "black",
};

const inActiveCss = {
  padding: "15px 30px",
  marginRight: "15px",
  cursor: "pointer",
};

const RequestForm = () => {
  const [urlstate, setUrlState] = React.useState<TState>({
    url: "",
  });

  const [jsonData, setJsonData] = useState("");
  const [apiSelectedMethod, setApiSelectedMethod] = useState("GET");
  const [apiResp, setApiResp] = useState<IAxiosResponse>();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUrlState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let value;
    if (apiSelectedMethod === "GET") {
      let response = await fetchAPI(urlstate);
      value = {
        data: response.data,
        headers: response.headers,
        status: response.status,
      };
    } else if ("POST") {
      if (!jsonData.length)
        return alert("Please provide a body in JSON format");
      let response = await postAPI({
        method: apiSelectedMethod,
        url: urlstate.url,
        jsonData: jsonData,
      });
      value = {
        data: response.data,
        headers: response.headers,
        status: response.status,
      };
    }

    setApiResp(value);
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
            onChange={(e) => setApiSelectedMethod(e.target.value)}
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
              sx: {
                color: 'black'
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

        <div style={{ display: "flex" }}>
          <div
            style={currentTab === 0 ? activeCss : inActiveCss}
            onClick={() => setCurrentTab(0)}
          >
            Params
          </div>
          <div
            style={currentTab === 1 ? activeCss : inActiveCss}
            onClick={() => setCurrentTab(1)}
          >
            Headers
          </div>
          <div
            style={currentTab === 2 ? activeCss : inActiveCss}
            onClick={() => setCurrentTab(2)}
          >
            Body
          </div>
        </div>
        {currentTab === 0 && (
          <RequestParams url={urlstate.url} setUrlState={setUrlState} />
        )}

        {currentTab === 1 && <RequestHeaders />}

        {currentTab === 2 && <RequestBody setJsonData={setJsonData} />}
      </form>
      <ResponseField response={apiResp} />
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

        {/* <RequestParams urlstate={urlstate} setUrlState={setUrlState} handleChangeParams={handleChangeParams} /> */}
{/* 
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
              sx: {
                color: 'black'
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
              sx: {
                color: 'black'
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
      </form> */}

    </>
  );
};

export default RequestForm;
