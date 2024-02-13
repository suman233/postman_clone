import React, { useCallback, useEffect, useState } from "react";
import { TState } from "../RequestForm/RequestForm";
import useAddParams, { ParamsType } from "@/Hooks/useAddParams";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

type Props = {
  url: string;
  setUrlState: React.Dispatch<React.SetStateAction<TState>>;
};

const RequestParams = ({ url, setUrlState }: Props) => {
  const [queryAdded, setQueryAdded] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [finalParamsList, setFinalParamsList] = useState<ParamsType[]>([]);
  const [textValue, setTextValue] = useState({ key: "", value: "" });
  const [paramsTextFields, setParamsTextFields] = useState([0]);
  const finalUrl = useAddParams(
    finalParamsList,
    queryAdded ? url.split("?")[0] + "?" : url.split("?")[0]
  );

  useEffect(() => {
    setUrlState({ url: finalUrl.slice(0, -1) });
  }, [toggle]);

  const handleSubmit = () => {
    if (!url.length) return alert("Please provide valid api endpoint");

    setQueryAdded(true);
    setToggle(!toggle);
    setFinalParamsList((prev) => [...prev, textValue]);
    setParamsTextFields((prev) => [...prev, 0]);
    setTextValue({ key: "", value: "" });
  };
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTextValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [textValue]
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
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="value"
            label="VALUE"
            variant="outlined"
            onChange={handleChange}
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
        </div>
      );
    });
  };
  return (
    <div>
      <Box sx={{ my: "30px" }}>
        <Typography sx={{ mb: 3, fontWeight: "bold" }}>Query Params</Typography>
        <div>
          {mapTextFields()}
          <Button
            onClick={handleSubmit}
            size="small"
            variant="contained"
            sx={{ height: 50, backgroundColor: "orange", width: "35%" }}
          >
            Add
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default RequestParams;
