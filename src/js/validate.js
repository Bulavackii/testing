/* eslint-disable linebreak-style */
/* eslint-disable no-cond-assign */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export default function luhnAlgoritm(setValue) {
  if (/[^0-9-\s]+/.test(setValue)) {
    return false;
  }
  let sum = 0;
  const value = String(setValue).replace(/\D/g, '');
  for (let i = 0; i < value.length; i++) {
    let n = parseInt(value[i], 10);
    sum += (value.length % 2) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;
  }
  return (sum % 10) === 0;
}
