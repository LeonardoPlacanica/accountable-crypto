import {useEffect, useState} from 'react';

const useDebounce = <T>(value: T, delay: number, immediate = false) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (immediate) {
      setDebouncedValue(value); // call the timeout anyway the first time
    }
  }, [immediate, value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
