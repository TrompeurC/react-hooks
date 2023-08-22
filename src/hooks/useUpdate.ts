import { useReducer } from "react";

const useUpdate = (): (() => void) => {
  const [, update] = useReducer((num: number) => num + 1, 0);
  return update;
};


export default useUpdate;