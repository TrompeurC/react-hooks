import { useEffect } from "react";
import useLatest from "./useLatest";

const useUnMount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(() =>  fnRef.current, []);
};

export default useUnMount;
