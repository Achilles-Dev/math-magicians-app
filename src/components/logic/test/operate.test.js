import operate from "../operate";

describe('operate', () => {
  test('add two numbers', () => {
    const sum = operate(3, 5, '+');
    expect(sum).toBe('8');
  });

  test('subtract two numbers', () => {
    const difference = operate(15, 5, '-');
    expect(difference).toBe('10');
  });

  test('multiply two numbers', () => {
    const product = operate(10, -4, 'x');
    expect(product).toBe('-40');
  });

  test('divide two numbers', () => {
    const quotient = operate(25, 5, '÷');
    expect(quotient).toBe('5');
  });

  test("Can't devide by 0", () => {
    const quotient = operate(25, 0, '÷');
    expect(quotient).toBe("Can't divide by 0.");
  });

  test('get answer for 10 modulus 3', () => {
    const remainder = operate(10, 3, '%');
    expect(remainder).toBe('1');
  });
});