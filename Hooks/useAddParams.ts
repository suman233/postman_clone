// import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type ParamsType = {
  key: string;
  value: string;
};

const useAddParams = (paramsArr: ParamsType[] | [], url = ""): string => {
  if (paramsArr.length === 0) {
    return url;
  }
  url += `${paramsArr[0].key}=${paramsArr[0].value}&`;
  const finalUrl = useAddParams(paramsArr.slice(1), url);

  return finalUrl;
};

export default useAddParams;