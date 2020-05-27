import { useEffect, useRef } from 'react';

export function usePrevious(value: boolean): boolean {
  const ref: React.MutableRefObject<boolean> = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
