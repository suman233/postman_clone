"use client";
import React, { useCallback, useEffect, useState } from "react";
import { TState } from "../RequestForm/RequestForm";
import useAddParams, { ParamsType } from "@/Hooks/useAddParams";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

type Props = {
  urlstate: TState;
  setUrlState: React.Dispatch<React.SetStateAction<TState>>;
};
// {key: "abc", value: "123"}, {key: "xyz", value: "456"}

const RequestParams = ({ urlstate, setUrlState }: Props) => {
  const [finalParamsList, setFinalParamsList] = useState<ParamsType[]>([]);
  const [textValue, setTextValue] = useState({ key: "", value: "" });
  const [paramsTextFields, setParamsTextFields] = useState([0]);
  const finalUrl = useAddParams(finalParamsList, urlstate.url);
  console.log(finalUrl);

  //   useEffect(() => {
  //   }, [finalUrl]);

  const handleSubmit = () => {
    // dbwefewf?name=dbd&email=bdbchd
    setParamsTextFields((prev) => [...prev, 0]);
    setFinalParamsList((prev) => [...prev, textValue]);
    setTextValue({ key: "", value: "" });
    setUrlState({ url: finalUrl });
  };
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTextValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const mapTextFields = (): React.JSX.Element[] => {
    return paramsTextFields.map((item, i) => {
      return (
        <div style={{ marginBottom: "15px" }}>
          <TextField
            id="outlined-basic"
            name="key"
            label="API KEY"
            variant="outlined"
            sx={{ mr: 2, backgroundColor: "#f2f6f7", color: 'black' }}
            onChange={handleChange}
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
            name="value"
            label="VALUE"
            variant="outlined"
            sx={{ backgroundColor: "#f2f6f7" }}
            onChange={handleChange}
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
        </div>
      );
    });
  };
  return (
    <div>
      <Box>
        <Typography sx={{ mb: 3, fontWeight: "bold" }}>Query Params</Typography>
        {mapTextFields()}

        <Button
          onClick={handleSubmit}
          size="small"
          variant="contained"
          sx={{ height: 50, backgroundColor: "orange" }}
        >
          Add
        </Button>
      </Box>
    </div>
  );
};

export default RequestParams;
