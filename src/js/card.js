/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */

export default function cardNumber(setValue) {
  const value = String(setValue).replace(/\D/g, "");

  if (/^(?:3[47][0-9]{13})$/.test(value)) {
    return "amex"; // American Express
  }
  if (/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(value)) {
    return "visa"; // Visa
  }
  if (/^(?:5[1-5][0-9]{14})$/.test(value)) {
    return "master"; // Mastercard
  }
  if (/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(value)) {
    return "discover"; // Discover
  }
  if (/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(value)) {
    return "diners_club"; // Diners Club
  }
  if (/^(?:(?:2131|1800|35\d{3})\d{11})$/.test(value)) {
    return "jcb"; // JCB
  }
  if (/^2|6/.test(value)) {
    return "mir"; // МИР
  }
}
