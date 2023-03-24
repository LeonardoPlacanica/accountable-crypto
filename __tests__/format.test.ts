import {formatNumberToCurrency} from '../src/utils/format';

describe('formatNumberToCurrency', () => {
  it('should format positive numbers correctly', () => {
    expect(formatNumberToCurrency(0)).toBe('0.00');
    expect(formatNumberToCurrency(1)).toBe('1.00');
    expect(formatNumberToCurrency(10)).toBe('10.00');
    expect(formatNumberToCurrency(100)).toBe('100.00');
    expect(formatNumberToCurrency(1000)).toBe('1,000.00');
    expect(formatNumberToCurrency(1234.56)).toBe('1,234.56');
    expect(formatNumberToCurrency(1234567.89)).toBe('1,234,567.89');
  });

  it('should format negative numbers correctly', () => {
    expect(formatNumberToCurrency(-1)).toBe('-1.00');
    expect(formatNumberToCurrency(-10)).toBe('-10.00');
    expect(formatNumberToCurrency(-100)).toBe('-100.00');
    expect(formatNumberToCurrency(-1000)).toBe('-1,000.00');
    expect(formatNumberToCurrency(-1234.56)).toBe('-1,234.56');
    expect(formatNumberToCurrency(-1234567.89)).toBe('-1,234,567.89');
  });

  it('should handle NaN and Infinity', () => {
    expect(formatNumberToCurrency(NaN)).toBe('NaN');
    expect(formatNumberToCurrency(Infinity)).toBe('Infinity');
    expect(formatNumberToCurrency(-Infinity)).toBe('-Infinity');
  });
});
