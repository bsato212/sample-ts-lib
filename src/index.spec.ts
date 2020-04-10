import * as index from './index';

describe('Index Module', () => {
  test('SayFoo should return a string', () => {
    expect(index.SayFoo()).toEqual('Foo!');
  });

  test('SayBar should return a string', () => {
    expect(index.SayBar()).toEqual('Bar!');
  });

  test('SayBaz should return a string', () => {
    expect(index.SayBaz()).toEqual('Baz!');
  });

  test('SayAnything should return a string', () => {
    expect(index.SayAnything('Anything')).toEqual('Anything!');
  });
});
