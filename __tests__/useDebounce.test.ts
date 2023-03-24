import {renderHook} from '@testing-library/react-hooks';
import useDebounce from '../src/hooks/useDebounce';

describe('useDebounce', () => {
  it('returns the initial value immediately if immediate is true', () => {
    const value = 'test';
    const {result} = renderHook(() => useDebounce(value, 1000, true));
    expect(result.current).toEqual(value);
  });

  it('returns the debounced value after the specified delay', async () => {
    jest.useFakeTimers();
    const value = 'test';
    const delay = 1000;
    const {result, rerender} = renderHook(
      ({value: v, delay: d}) => useDebounce(v, d),
      {
        initialProps: {value, delay},
      },
    );
    expect(result.current).toEqual(value);
    const newValue = 'new test';
    rerender({value: newValue, delay});
    jest.advanceTimersByTime(delay * 2);
    expect(result.current).toEqual(newValue);
    jest.useRealTimers();
  });
});
