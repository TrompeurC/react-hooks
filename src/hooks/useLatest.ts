import { useRef } from "react";

export default function useLatest<T> (val:T): {readonly current: T} {
  const ref = useRef(val)
  ref.current = val;
  return ref;
}