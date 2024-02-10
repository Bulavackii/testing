/* eslint-disable linebreak-style */
import cardNumber from '../card';

test('return amex', () => {
  const value = '371449635398431';
  const result = cardNumber(value);
  expect(result).toBe('amex');
});
test('return master', () => {
  const value = '5555555555554444';
  const result = cardNumber(value);
  expect(result).toBe('master');
});
test('return visa', () => {
  const value = '4111111111111111';
  const result = cardNumber(value);
  expect(result).toBe('visa');
});
test('return discover', () => {
  const value = '6011111111111117';
  const result = cardNumber(value);
  expect(result).toBe('discover');
});
test('return jcb', () => {
  const value = '3530111333300000';
  const result = cardNumber(value);
  expect(result).toBe('jcb');
});
test('return diners-club', () => {
  const value = '30569309025904';
  const result = cardNumber(value);
  expect(result).toBe('diners_club');
});
test('return mir', () => {
  const value = '2202200188622201';
  const result = cardNumber(value);
  expect(result).toBe('mir');
});
