import calculate from '../calculate';
import operate from '../operate';

const object = {
  total: null,
  next: null,
  operation: null,
};

describe('clicking numbers', () => {
  test('first number is 0', () => {
    const calc = calculate({ ...object, next: '0' }, '0');
    expect(calc).toEqual({});
  });

  test('first number added', () => {
    const calc = calculate({ ...object }, '5');
    expect(calc).toEqual({ total: null, next: '5' });
  });

  test('other numbers added before operation', () => {
    const newobject = { ...object, next: '3' };
    const calc = calculate({ ...newobject }, '0');
    expect(calc).toEqual({ total: null, next: '30' });
  });

  test('first added after operation', () => {
    const newobject = { ...object, operation: '+' };
    const calc = calculate({ ...newobject }, '5');
    expect(calc).toEqual({ ...newobject, operation: '+', next: '5' });
  });

  test('other numbers added after operation', () => {
    const newobject = { ...object, next: '1', operation: '+' };
    const calc = calculate({ ...newobject }, '5');
    expect(calc).toEqual({ ...newobject, next: '15' });
  });
});

describe('Clicking operations(+,x, etc)', () => {
  test('no number added before operation', () => {
    const calc = calculate({ ...object }, 'x');
    expect(calc).toEqual({ operation: 'x' });
  });

  test('operation added after number', () => {
    const calc = calculate({ ...object, total: '2' }, 'x');
    expect(calc).toEqual({ next: null, total: '2', operation: 'x' });
  });

  test('operation added after another operator', () => {
    const newobject = { ...object, operation: '-', total: '45'};
    const calc = calculate({ ...newobject}, 'x');
    expect(calc).toEqual({ ...newobject, operation: 'x' });
  });

  test('operation after two numbers and another operation', () => {
    const newobject = { total: 5, next: 3, operation: '-'};
    const solve = operate(newobject.total, newobject.next, newobject.operation);
    const calc = calculate({ ...newobject}, 'x');
    expect(calc).toEqual({ next:null, total: solve, operation: 'x' });
  });

  test('equal sign before any number', () => {
    const calc = calculate({...object}, '=');
    expect(calc).toEqual({});
  })

  test('equal sign after two numbers and opertaion', () => {
    const newobject = {total: '5', next: '10', operation: 'x'};
    const calc = calculate({...newobject}, '=');
    expect(calc).toEqual({operation:null, next: null, total: '50'});
  });

  test('point results in decimal number', () => {
    const newobject = { ...object, next: '10'};
    const calc = calculate({...newobject}, '.');
    expect(calc).toEqual({...newobject, next: '10.'});
  });

  test('checks for dot already clicked', () => {
    const newobject = { ...object, next: '10.'};
    const calc = calculate({...newobject}, '.');
    expect(calc).toEqual({...newobject, next: '10.'});
  });
});
