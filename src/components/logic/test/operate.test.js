import operate from "../operate";

describe('operate', () => {
  test('add two numbers', () => {
    const sum = operate(3, 5, '+');
    expect(sum).toBe('8');
  });

  test('subtract two numbers', () => {
    const sum = operate(15, 5, '-');
    expect(sum).toBe('10');
  });

  test('multiply two numbers', () => {
    const sum = operate(10, -4, 'x');
    expect(sum).toBe('-40');
  });

  test('divide two numbers', () => {
    const sum = operate(25, 5, '÷');
    expect(sum).toBe('5');
  });

  test('get answer for 10 modulus 3', () => {
    const sum = operate(10, 3, '%');
    expect(sum).toBe('1');
  });
});