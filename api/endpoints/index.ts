import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// type ReadOnlyType<T> = {
//   readonly [Item in keyof T]: T[Item];
// };

export type ParamsType = {
  key: string;
  value: string;
};

const useAddParams = () => {
 

  const concatParams=(paramsArr: ParamsType[] | [], url: string)=>{
    let str = url;
    console.log(paramsArr,url,"URL")
    //   let count = 0;
      paramsArr.forEach((item, idx) => {
        // count = idx + count;
        // if (count === paramsArr.length) str += `?${item.key}=${item.value}`;
        // else str += `${item.key}=${item.value}&`;
        if(item?.key?.length && item?.value?.length){
          return str += `&${item.key}=${item.value}`;
        }
       
        // dbwefewf?name=xyz&email=bcd
        // return str.slice(0, -1);
      });
      return str;
  }

  return {concatParams}

};

export default useAddParams;

//   const str = useRef(url + "?");
// //   let str = url + "?";
//   useEffect(() => {
//     str.current=str.current + `${paramsArr[paramsArr.length]?.key}=${paramsArr[paramsArr.length]?.value}` + "&";
//   }, [paramsArr]);
// console.log(str);

//   const template = paramsArr.length ? mapParamsToString() : url;
//   return str.current;

// let str = url + "?";
//     paramsArr.forEach((item, idx) => {
//       let count = idx + 1;
//       if (count === paramsArr.length)
//         str += `${encodeURIComponent(item.key)}=${encodeURIComponent(
//           item.value
//         )}`;
//       else
//         str += `${encodeURIComponent(item.key)}=${encodeURIComponent(
//           item.value
//         )}&`;

//       // dbwefewf?name=dbd&email=bdbchd
//       //   return str.slice(0,-1);
//     });
//     return str;
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

const styles = {
  floatingLabelFocusStyle: {
    color: "somecolor"
  }
}
const RequestParams = ({ urlstate, setUrlState }: Props) => {
  const [finalParamsList, setFinalParamsList] = useState<ParamsType[]>([]);
  const [textValue, setTextValue] = useState({ key: "", value: "" });
  const [paramsTextFields, setParamsTextFields] = useState<ParamsType[]>([]);
  const {concatParams} = useAddParams();

  console.log(urlstate,"urlstate")
  

  //   useEffect(() => {
  //   }, [finalUrl]);

  const handleSubmit = () => {
    // dbwefewf?name=dbd&email=bdbchd
    setParamsTextFields([...paramsTextFields,{
      key:"",value:""
    }])
    setFinalParamsList((prev) => [...prev, textValue]);
    setTextValue({ key: "", value: "" });
   
    setUrlState({ ...urlstate,url: concatParams(paramsTextFields || '', urlstate.url) });
  };
  const handleChange = 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,index:number) => {
      let temp=[...paramsTextFields]

      if(e?.target?.name && temp[index]){
        temp[index]={
          ...temp[index],
          [e?.target?.name]:e?.target?.value
        }
      }

      console.log({[e?.target?.name]:e?.target?.value},temp)

      setParamsTextFields(temp);
    }
    
  


  return (
    <div>
      <Box>
        <Typography sx={{ mb: 3, fontWeight: "bold" }}>Query Params</Typography>
        {
          paramsTextFields.map((item, i) => {
            return (
              <div style={{ marginBottom: "15px" }}>
                <TextField
                  id="outlined-basic"
                  name="key"
                  label="API KEY"
                  variant="outlined"
                  sx={{ mr: 2, backgroundColor: "#f2f6f7", color: 'black' }}
                  onChange={(e)=>handleChange(e,i)}
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
                    sx:{
                      color:'black'
                    }
                  }}
                />
                <TextField
                  id="outlined-basic"
                  name="value"
                  label="VALUE"
                  variant="outlined"
                  sx={{ backgroundColor: "#f2f6f7" }}
                  value={item?.value}
                  onChange={(e)=>handleChange(e,i)}
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
              </div>
            );
          })
        }

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
