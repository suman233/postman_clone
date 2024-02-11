import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// type ReadOnlyType<T> = {
//   readonly [Item in keyof T]: T[Item];
// };

export type ParamsType = {
  key: string;
  value: string;
};

const useAddParams = (paramsArr: ParamsType[] | [], url: string): string => {
  console.log(paramsArr);
  let str = url;
//   let count = 0;
  paramsArr.forEach((item, idx) => {
    // count = idx + count;
    // if (count === paramsArr.length) str += `?${item.key}=${item.value}`;
    // else str += `${item.key}=${item.value}&`;
   return str += `&${item.key}=${item.value}`;
    // dbwefewf?name=dbd&email=bdbchd
    // return str.slice(0, -1);
  });
  return str;
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
