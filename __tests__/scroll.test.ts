import {NativeScrollEvent} from 'react-native/types';
import {isCloseToBottom} from '../src/utils/scroll';

describe('isCloseToBottom', () => {
  const layoutMeasurement = {height: 500};
  const contentOffset = {y: 400};
  const contentSize = {height: 1000};

  it('returns true if scrolled to the bottom', () => {
    const event: NativeScrollEvent = {
      layoutMeasurement,
      contentOffset,
      contentSize,
    } as NativeScrollEvent;
    expect(isCloseToBottom(event)).toBe(true);
  });

  it('returns false if not scrolled to the bottom', () => {
    const smallerContentOffset = {y: 200};
    const event: NativeScrollEvent = {
      layoutMeasurement,
      contentOffset: smallerContentOffset,
      contentSize,
    } as NativeScrollEvent;
    expect(isCloseToBottom(event)).toBe(false);
  });
});
