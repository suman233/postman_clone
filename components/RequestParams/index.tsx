"use client";
import React, { useCallback, useEffect, useState } from "react";
import { TState } from "../RequestForm/RequestForm";
import useAddParams, { ParamsType } from "@/Hooks/useAddParams";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

type Props = {
  urlstate: TState;
  setUrlState: React.Dispatch<React.SetStateAction<TState>>;
  handleChangeParams?: (newParams: Record<string, string>) => void
};
// {key: "abc", value: "123"}, {key: "xyz", value: "456"}

const RequestParams = ({ urlstate, setUrlState, handleChangeParams }: Props) => {
  const [paramsTextFields, setParamsTextFields] = useState<{ key: string, value: string }[]>([]);

  //   useEffect(() => {
  //   }, [finalUrl]);

  const handleSubmit = () => {
    // dbwefewf?name=dbd&email=bcd
    setParamsTextFields((prev) => [...prev, { key: "", value: "" }]);
  };
  const handleChange = useCallback(
    (index: number, propName: keyof typeof paramsTextFields[number]) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

      setParamsTextFields((prev) => {
        const newData = [...prev];
        const foundData = newData?.[index];
        if (foundData) {
          newData[index] = { ...foundData, [propName]: e.target.value }
        }

        const newObject: Record<string, string> = {}
        newData?.forEach((item) => {
          newObject[item.key] = item.value
        })
        handleChangeParams?.(newObject);

        return newData
      })
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
            onChange={handleChange(i, "key")}
            value={item?.key}
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
            onChange={handleChange(i, "value")}
            value={item?.value}
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
